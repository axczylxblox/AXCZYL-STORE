// Endpoint untuk memproses data pembayaran di sisi server
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { project, email, product, price, method } = req.body;

    // Logika deteksi mutasi (Contoh simulasi)
    // Di sini lo bisa hubungkan ke API Cekmutasi.co.id atau API Bank lo
    try {
        const orderId = "AXC-" + Math.floor(Math.random() * 90000) + 10000;
        
        // Simulasi Response sukses membuat request pembayaran
        return res.status(200).json({
            success: true,
            orderId: orderId,
            status: 'PENDING',
            message: 'Silakan selesaikan pembayaran sesuai nominal',
            data: {
                project,
                product,
                price,
                qr_link: "https://i.ibb.co.com/zh14S8vp/Kode-QRIS-AXCZYL-STORE-Kesehatan-Olahraga.jpg"
            }
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}
