const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'booking.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'data-dokter.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});