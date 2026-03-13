export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, product, price } = req.body;
    
    // Logika order sederhana
    const orderData = {
      id: "ORD-" + Math.floor(Math.random() * 100000),
      username,
      product,
      price,
      status: "Success",
      date: new Date().toLocaleDateString('id-ID')
    };

    return res.status(200).json({
      success: true,
      message: "Order Berhasil",
      data: orderData
    });
  } else {
    res.status(405).json({ message: 'Harus pake POST bang' });
  }
}
