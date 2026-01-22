# Laporan Serah Terima: Soeltan Medsos (Web App)

## 1. Fitur Utama (CRUD Features)

Aplikasi ini memiliki sistem manajemen data lengkap untuk Admin:

### A. Manajemen Produk (Services)

- **Create**: Menambah layanan baru (Nama, Kategori, Harga, Min/Max Order).
- **Read**: Melihat daftar layanan yang tersedia dengan filter kategori.
- **Update**: Mengedit harga layanan atau info detail lainnya.
- **Delete**: Menghapus layanan yang sudah tidak aktif.

### B. Manajemen Kategori

- **Create**: Menambah kategori layanan baru (misal: Instagram, TikTok).
- **Read/Update/Delete**: Mengelola nama dan slug kategori.

### C. Manajemen Pesanan (Orders)

- **Read**: Admin dapat melihat semua pesanan masuk (Status: Pending, Processing, Success, Error).
- **Update**: Mengubah status pesanan secara manual (misal: dari _Processing_ menjadi _Success_).
- **Update Pembayaran**: Admin kini bisa mengubah status pembayaran manual jika ada kendala sistem (Pending -> Paid).

---

## 2. Status Payment Gateway (Midtrans) - _PENTING_

Sistem pembayaran saat ini telah dikonfigurasi ke **MODE PRODUKSI (LIVE)**.

- **Status**: ✅ Siap menerima uang asli (bukan testing lagi).
- **Tindakan Diperlukan**:
  Agar uang masuk ke rekening perusahaan, mohon input **Server Key** & **Client Key** produksi dari dashboard Midtrans ke file konfigurasi (`.env`).
  - _Catatan_: Saat ini kode sudah diset `isProduction: true`. Segera setelah Key dimasukkan, pembayaran via QRIS/VA/E-Wallet akan langsung aktif dan real-time.

---

## 3. Update Branding & UI (Terbaru)

- **Logo Admin**: Halaman login Admin kini menampilkan **Logo Asli Soeltan Medsos**, menggantikan logo inisial "S" default, memberikan kesan lebih profesional dan kredibel.

---

## 4. Cara Deploy (Panduan Instalasi)

### Opsi A: Deployment Otomatis (Vercel) - _TERM Mudah_

Cocok untuk demo atau production skala kecil.

1.  Upload kode project ke **GitHub**.
2.  Buka [Vercel.com](https://vercel.com) -> **Add New Project**.
3.  Pilih repository GitHub project ini.
4.  Masukkan **Environment Variables** (sesuai file `.env`).
5.  Klik **Deploy**. Website akan langsung online.

### Opsi B: Deployment Manual (VPS/Hosting)

Jika menggunakan server sendiri (Ubuntu/CentOS).

**Langkah 1: Backend**

1.  Upload folder `backend` ke server.
2.  Install dependencies: `npm install --production`.
3.  Jalankan server: `npm start` (Pastikan port 3001 terbuka).

**Langkah 2: Frontend**

1.  Di komputer lokal, jalankan: `npm run build`.
2.  Akan muncul folder baru bernama `dist`.
3.  Upload isi folder `dist` tersebut ke folder publik di hosting (misal: `public_html` atau `/var/www/html`).

---

**Kesimpulan:**
Aplikasi sudah **SIAP LIVE**. Seluruh fitur CRUD berfungsi, branding sudah sesuai identitas bisnis, dan payment gateway siap switch ke mode uang asli.
