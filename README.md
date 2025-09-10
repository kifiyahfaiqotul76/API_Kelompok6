# Proyek API Ulasan Film - Kelompok 6

## Anggota Kelompok
- Ajeng Maulida Puspita         (362458302012)
- Nisa Eka Kholifaturrizkiah    (362458302018)
- Lilis Thalisa                 (362458302020)
- Siti Faiqotul Kifiyah         (362458302021)
  
## Deskripsi Proyek
API ini adalah layanan internal untuk mengelola ulasan film
dari Studio Ghibli dengan data film yang direferensikan dari Ghibli API publik.

## Cara Menjalankan Proyek
1. Clone repository ini: ‘git clone ...‘
2. Masuk ke direktori: ‘cd NAMA-REPO‘
3. Install dependensi: ‘npm install‘
4. Jalankan server: ‘node server.js‘
Server akan berjalan di ‘http://localhost:3300‘.

## Daftar Endpoint
- ‘GET /status‘: Cek status API.
  <img width="1920" height="1200" alt="Get Status" src="https://github.com/user-attachments/assets/c50d16be-3e8d-48c8-8293-a247a486ca6e" />
  
- ‘GET /reviews‘: Mengambil semua ulasan.
  <img width="1920" height="1200" alt="Get Reviews" src="https://github.com/user-attachments/assets/51cea3d6-ceb1-4575-a3ba-badf6344f9b8" />
  
- ‘GET /reviews/:id‘: Mengambil ulasan spesifik.
  <img width="1920" height="1200" alt="Get Reviews Id" src="https://github.com/user-attachments/assets/e6e628f2-92e4-4393-aa73-6df818c9c031" />
  
- ‘POST /reviews‘: Membuat ulasan baru.
  POST saat menambah baru:
  ![post1](https://github.com/user-attachments/assets/22340c92-89dc-4578-b516-cd9e18b4e4f1)
  POST saat sudah berhasil menambah baru:
  ![post2](https://github.com/user-attachments/assets/cb012eb8-ab54-49e6-bd22-0f78eb2e0653)

- ‘PUT /reviews/:id‘: Memperbarui ulasan.
  PUT saat proses mengubah:
  <img width="1920" height="1200" alt="putReviews1" src="https://github.com/user-attachments/assets/e525fe8b-b147-4069-a928-43b587de0854" />
  PUT saat sudah berhasil mengubah:
  <img width="1920" height="1200" alt="putReviews2" src="https://github.com/user-attachments/assets/3ccf7225-c51a-4e6c-8eee-9716d7a8b856" />
  
- ‘DELETE /reviews/:id‘: Menghapus ulasan.
  DELETE saat masih belum dihapus:
  <img width="1920" height="1200" alt="delete1" src="https://github.com/user-attachments/assets/d22ff30f-cff6-45b8-affc-2edb0f6bedc7" />
  DELETE saat proses dihapus:
  <img width="1920" height="1200" alt="delete2" src="https://github.com/user-attachments/assets/7fe17130-1b18-4148-b735-ef6557bac232" />
  DELETE saat sudah berhasil dihapus:
  <img width="1920" height="1200" alt="delete3" src="https://github.com/user-attachments/assets/0d852a6b-1e10-4b6e-987d-d072e3f32b7b" />


