export default async function handler(req: any, res: any) {
  const { code } = req.query;

  const CLIENT_ID = process.env.GITHUB_CLIENT_ID!;
  const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET!;

  // Step 1 — no code yet: redirect user to GitHub to authorize
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
      const content = JSON.stringify({
        token: data.access_token,
        provider: "github",
      });
      // Post token back to Decap CMS opener window
      return res.send(`<!DOCTYPE html>
<html>
<body>
<script>
(function () {
  const msg = 'authorization:github:success:' + ${JSON.stringify(content)};
  window.opener.postMessage(msg, '*');
  window.close();
})();
</script>
</body>
</html>`);
    }

    return res
      .status(400)
      .json({ error: data.error || "OAuth failed" });
  } catch {
    return res.status(500).json({ error: "Server error" });
  }
}
