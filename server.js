const express = require('express');
const app = express();
const port = 3200;

app.use(express.json());

let reviews = [
    {
        id: 1,
        film_id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
        reviews: "Ajeng, Nisa, Fia, Lilis",
        rating: 3,
        comment: "Film nya sangat memuaskan",
    }
];

// Mendapatkan semua review
app.get('/', (req, res) => {
    res.send('Selamat datang di API film');
});

app.get('/reviews', (req, res) => {
    res.json(reviews);
});

app.listen(port, () => {
    console.log('Server berjalan di http//')
})