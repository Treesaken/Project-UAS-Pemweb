const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});