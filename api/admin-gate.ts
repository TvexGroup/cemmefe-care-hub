export default function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body ?? {};
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  if (!ADMIN_PASSWORD) {
    return res.status(500).json({ error: 'Admin password not configured' });
  }

  if (password === ADMIN_PASSWORD) {
    // Set HttpOnly cookie valid for 8 hours
    res.setHeader(
      'Set-Cookie',
      `cms-auth=1; Path=/; Secure; SameSite=Strict; Max-Age=28800`
    );
    return res.status(200).json({ ok: true });
  }

  return res.status(401).json({ error: 'Incorrect password' });
}
