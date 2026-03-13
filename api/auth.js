export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Data Admin sesuai permintaan lo
    if (username === 'admin' && password === 'axczylscary1') {
      return res.status(200).json({
        success: true,
        user: { username: 'admin', role: 'admin', balance: 9999999 }
      });
    }

    // Simulasi user lain
    return res.status(200).json({
      success: true,
      user: { username: username, role: 'user', balance: 0 }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
