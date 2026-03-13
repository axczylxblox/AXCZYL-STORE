const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static('.'));

// Database sederhana di memori (biar kenceng)
let users = [{ username: 'admin', password: 'axczylscary1', balance: 9999999, role: 'admin' }];
let orders = [];
let deposits = [];

// API Login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true, user });
    } else {
        res.status(401).json({ success: false, message: 'Username/Password Salah' });
    }
});

// API Order
app.post('/api/order', (req, res) => {
    const { username, product, price } = req.body;
    const user = users.find(u => u.username === username);
    if (user && user.balance >= price) {
        user.balance -= price;
        const newOrder = { id: Date.now(), username, product, price, status: 'Success', date: new Date().toLocaleString() };
        orders.push(newOrder);
        res.json({ success: true, balance: user.balance, order: newOrder });
    } else {
        res.status(400).json({ success: false, message: 'Saldo tidak cukup' });
    }
});

app.get('/api/history/:username', (req, res) => {
    const userOrders = orders.filter(o => o.username === req.params.username);
    res.json(userOrders);
});

app.listen(PORT, () => {
    console.log(`Axczyl Store running on port ${PORT}`);
});
