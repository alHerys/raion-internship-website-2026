---
next:
  text: "Pengenalan Dart"
  link: "../1_pengenalan_dart/a_pengertian/"
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/ASzu_JzcA34?si=MUbs9pIZJioX0MUu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<hr>

# Persiapan dan Instalasi Flutter

Sebelum memulai perjalanan belajar di **Raion Internship 2026**, kita perlu memastikan perangkat kamu sudah siap untuk pengembangan mobile menggunakan Flutter.

Flutter bergantung pada beberapa tools command-line dasar (seperti Git) dan SDK spesifik untuk build ke Android atau iOS.

## 1. Verifikasi Instalasi Saat Ini

Sebelum mengunduh sesuatu, mari kita periksa apakah perangkat kamu mungkin sudah memiliki beberapa tools ini.

### Cek Instalasi Git
Buka PowerShell (Windows) atau Terminal (macOS) lalu jalankan:

```bash
git --version
```

- **Jika Berhasil:** Akan muncul versi Git, contohnya.

```bash
git version 2.39.2
```

- **Jika Gagal:** Akan muncul error seperti ini (*bisa saja berbeda):

```bash
git is not recognized as an internal or external command
```


### Cek Instalasi Flutter

Buka powershell (windows) atau terminal (macOS) lalu jalankan:

```bash
flutter --version
```

- **Jika Berhasil:** Akan muncul informasi versi Flutter dan Dart, contohnya:

```bash
Flutter 3.19.1 • channel stable
```

- **Jika Gagal:** Akan muncul error `command not found`.
```bash
flutter: command not found
```

## 2. Panduan Instalasi

Jika pengecekan di atas menunjukkan kamu belum memiliki `git` atau `flutter`, ikuti langkah-langkah berikut:

### 2.1 Instalasi Git
Git wajib ada sebelum menginstal Flutter.
<iframe width="560" height="315" src="https://www.youtube.com/embed/TT8ktVp5j-k?si=yHD3kGo0ytICB0-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 2.2 Instalasi Flutter SDK
Kunjungi situs resmi instalasi Flutter: [Install Flutter](https://docs.flutter.dev/get-started/install).

<iframe width="560" height="315" src="https://www.youtube.com/embed/tiOCrXG3Fq4?si=umeJhWwIsbXf-39p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### 2.3 Setup Emulator Android untuk menjalankan Flutter
Setelah membuat aplikasi flutter nantinya, kamu harus bisa menjalankannya. Untuk itu kamu memerlukan emulator android. Berikut adalah cara menginstall emulator android:
https://docs.flutter.dev/platform-integration/android/setup


> Walaupun kamu menggunakan VS Code untuk ngoding sehari-hari, kamu **tetap harus menginstal Android Studio** (setidaknya satu kali) karena Flutter membutuhkan Android SDK yang di-bundling bersama Android Studio untuk bisa membuild aplikasi ke format `.apk`.

Setelah semua terinstal, jalankan `flutter doctor` sekali lagi. Jika Android toolchain dan IDE pilihanmu sudah `[✓]`, maka perangkatmu sudah 100% siap!

### 2.4 (Khusus pengguna macOS) Setup Xcode untuk iOS
Khusus pengguna macOS, kamu perlu menginstall Xcode untuk bisa menjalankan aplikasi Flutter di iOS. Berikut adalah cara menginstall Xcode:
https://docs.flutter.dev/platform-integration/ios/setup

<iframe width="560" height="315" src="https://www.youtube.com/embed/QG9bw4rWqrg?si=gGn57zCtuU3if8NY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

