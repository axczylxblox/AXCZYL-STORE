export default async function handler(req, res) {
    const { orderId } = req.query;

    // Di sini biasanya lo ngecek ke Database atau API Mutasi
    // Kita buat simulasi: 20% kemungkinan terdeteksi otomatis
    const isPaid = Math.random() > 0.8; 

    if (isPaid) {
        return res.status(200).json({
            success: true,
            status: 'PAID',
            message: 'Pembayaran Terdeteksi! Pesanan sedang diproses.'
        });
    } else {
        return res.status(200).json({
            success: false,
            status: 'PENDING',
            message: 'Mutasi belum ditemukan. Coba beberapa saat lagi atau hubungi admin.'
        });
    }
}
