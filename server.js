const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3300;

app.use(cors());
app.use(express.json());

// Data sementara (in-memory)
let reviews = [
  { id: 1, film_Id: "12cfb892-aac0-4c5b-94af-521852e46d6a", user: "Ajeng", rating: 5, comment: "Film terbaik sepanjang masa!" },
  { id: 2, film_Id: "12cfb892-aac0-4c5b-94af-521852e46d6a", user: "Lilis", rating: 5, comment: "Film terbaik sepanjang masa!" },
  { id: 3, film_Id: "12cfb892-aac0-4c5b-94af-521852e46d6a", user: "Nisa", rating: 5, comment: "Film terbaik sepanjang masa!" },
  { id: 4, film_Id: "12cfb892-aac0-4c5b-94af-521852e46d6a", user: "Siti", rating: 5, comment: "Film terbaik sepanjang masa!" }
];

let nextId = 5;

// GET /status
app.get('/status', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// GET semua review
app.get('/reviews', (req, res) => {
  res.json(reviews);
});

// GET review by ID
app.get('/reviews/:id', (req, res) => {
  const review = reviews.find(r => r.id === parseInt(req.params.id));
  if (!review) return res.status(404).json({ error: 'Review not found' });
  res.json(review);
});

// POST tambah review baru
app.post('/reviews', (req, res) => {
  const { film_Id, filmId, user, rating, comment } = req.body;
  const filmIdValue = film_Id || filmId;

  if (!filmIdValue || !user || rating === undefined) {
    return res.status(400).json({ error: 'film_Id (atau filmId), user, rating wajib ada' });
  }
  if (rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'rating harus 1–5' });
  }

  const newReview = { id: nextId++, film_Id: filmIdValue, user, rating, comment: comment || "" };
  reviews.push(newReview);
  res.status(201).json(newReview);
});

// PUT update review
app.put('/reviews/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = reviews.findIndex(r => r.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Review not found' });

  const { user, rating, comment } = req.body || {};
  if (rating !== undefined && (rating < 1 || rating > 5)) {
    return res.status(400).json({ error: 'rating harus 1–5' });
  }

  reviews[idx] = {
    ...reviews[idx],
    ...(user && { user }),
    ...(rating !== undefined && { rating }),
    ...(comment && { comment })
  };
  res.json(reviews[idx]);
});

// DELETE review
app.delete('/reviews/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = reviews.findIndex(r => r.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Review not found' });

  reviews.splice(idx, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
