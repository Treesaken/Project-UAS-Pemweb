const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
})

// Route untuk halaman utama
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin', 'index.html'));
});

app.get('/booking', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin', 'booking.html'));
});

app.get('/datadokter', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin', 'data-dokter.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin', 'home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin', 'login.html'));
});

const adminCredentials = {
    username: 'admin',
    password: 'admin'
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        res.json({ success : true, message: 'Login berhasil' });
    } else {
        res.status(401).json({ success: false, message: 'Login gagal' });
    }
});

app.use('/admin', express.static(path.join(__dirname, 'public', 'admin')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});