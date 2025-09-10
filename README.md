# Proyek API Ulasan Film - Kelompok 6

## Anggota Kelompok
- Ajeng Maulida Puspita (362458302012)
- Nisa Eka Kholifaturrizkiah (362458302018)
- Lilis Thalisa (362458302020)
- Siti Faiqotul Kifiyah (362458302021)
  
## Deskripsi Proyek
API ini adalah layanan internal untuk mengelola ulasan film
dari Studio Ghibli,
dengan data film yang direferensikan dari Ghibli API publik.

## Cara Menjalankan Proyek
1. Clone repository ini: ‘git clone ...‘
2. Masuk ke direktori: ‘cd NAMA-REPO‘
3. Install dependensi: ‘npm install‘
4. Jalankan server: ‘node server.js‘
Server akan berjalan di ‘http://localhost:3300‘.

## Daftar Endpoint
- ‘GET /status‘: Cek status API.
- ‘GET /reviews‘: Mengambil semua ulasan.
- ‘GET /reviews/:id‘: Mengambil ulasan spesifik.
- ‘POST /reviews‘: Membuat ulasan baru.
- ‘PUT /reviews/:id‘: Memperbarui ulasan.
- ‘DELETE /reviews/:id‘: Menghapus ulasan.

