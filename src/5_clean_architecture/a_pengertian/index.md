---
next: false
---

# Pengenalan Clean Architecture

Lebih detailnya disini https://docs.flutter.dev/app-architecture

## Mengapa Aplikasi Butuh Arsitektur?

Sejauh ini, saat belajar dasar Flutter, kita menaruh semua logika kita ke dalam satu file `main.dart` atau dilekatkan langsung di UI Button `onPressed`.
Logika API (mengambil JSON dari internet), Validasi Password (Logika Bisnis), dan tampilan layar Text Input (UI) bercampur aduk menjadi satu tumpukan mengerikan *(Spaghetti Code)*.

Aplikasi kecil masih bisa bertahan dengan cara itu, namun Raion Internship membekali kamu untuk paham konsep ini.

**Clean Architecture (Arsitektur Bersih)** adalah sebuah pedoman rancang bangun aplikasi.
Tujuan utamanya adalah: **Memisahkan Peran/Kode agar tidak saling mengetahui (Decoupling) sehingga mudah diuji (Testable) dan diperluas skalanya (Scalable)**.

## Pemisahan Tiga Layer Utama

Meskipun Flutter tidak memaksa pola apapun, komunitas global Flutter secara de-facto mengadopsi modifikasi *Clean Architecture* menjadi Tiga Lapisan (Layer) folder utama: **Domain**, **Data**, dan **Presentation**.

```text
lib/
├── core/                   (Bagian Umum/Reusable, spt konfigurasi, style text, error types)
├── data/                   (Folder Logika)
└── presentation/           (Folder Tampilan UI)
```

Mari bedah tanggung jawab masing-masing lapisan folder tersebut!

---

### Layer 1: Data
Berposisi di luar menjaga Domain. Ini adalah Kuli Pekerja aslinya yang melakukan "Kotornya pekerjaan I/O Internet".
Data layer akan mengeksekusi janji yang ditulis oleh Interfaces di Domain.

*   **Repositories (Implementation):** Kelas turunan konkrit yang mengimplementasikan Papan Pengumuman. Bertugas menyambung kepingan Puzzle dari DataSource dan meneruskannya ke Domain.
*   **Data Models:** Representasi `Entity` Domain, tetapi disesuaikan dengan struktur *database*. Di sini kita menulis fungsi Serialisasi JSON (`fromJson` & `toJson`).
*   **Data Sources:** Tempat nyata yang mencangkul data lewat Remote (Menembak internet API ke Backend) dan Local (Menyimpan riwayat Offline di HP menggunakan SQLite/Room/SharedPreference).

### Layer 2: Presentation (Lapisan Tampilan / UI)
Layer ini tempatnya Widget pohon Flutter bernaung! Ini berhubungan langsung dengan tombol yang di tekan pengguna.

*   **Pages / Screens:** Layout utama layar HP-mu (`Scaffold`, `AppBar`, dll).
*   **Widgets:** Potongan kerikil UI kecil (misal: Komponen terpisah berupa Card Produk merah).
*   **Status Controllers (State Management):** Otak dari *Screen* (Biasanya memakai `BLoC`, `Provider`, atau `GetxController`). Pengontrol ini yang memerintahkan (memanggil Use Case Domain) jika sebuah tombol diklik pengguna, lalu mengirimkan status "Memuat (Loading..)", "Sukses Mengambil (Loaded)" memanggil Data Layer.

