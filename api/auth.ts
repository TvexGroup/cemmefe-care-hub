export default async function handler(req: any, res: any) {
  const { code } = req.query;

  const CLIENT_ID = process.env.GITHUB_CLIENT_ID!;
  const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET!;

  // Step 1 — no code yet: redirect to GitHub OAuth
  if (!code) {
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      scope: "repo,user",
    });
    return res.redirect(
      `https://github.com/login/oauth/authorize?${params}`
    );
  }

  // Step 2 — exchange code for access token
  try {
    const response = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code,
        }),
      }
    );

    const data = (await response.json()) as {
      access_token?: string;
      error?: string;
    };

    if (data.access_token) {
      // Two-step handshake protocol that Decap CMS expects:
      // 1. Post "authorizing:github" to opener to signal readiness
      // 2. Wait for opener to respond, then send the token back using e.origin
      const tokenJson = JSON.stringify({
        token: data.access_token,
        provider: "github",
      });

      return res.send(`<!DOCTYPE html>
<html>
<body>
<script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:success:${tokenJson}',
      e.origin
    );
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
</body>
</html>`);
    }

    return res.status(400).json({ error: data.error || "OAuth failed" });
  } catch {
    return res.status(500).json({ error: "Server error" });
  }
}
