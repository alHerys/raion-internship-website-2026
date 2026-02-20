---
next:
  text: "Stateless vs Stateful Widgets"
  link: "../b_stateless_stateful/"
---

# Pengenalan Framework Flutter

## Apa Itu Flutter?

**Flutter** adalah sebuah UI toolkit raksasa yang *open-source* dibuat oleh Google. Flutter mengizinkan para *developer* (seperti kamu) untuk membuat aplikasi multi-*platform* yang cantik, dinamis, natively compiled (kompilasi mesin asli), hanya dengan menggunakan **satu bahasa pemrograman (Dart) dan satu basis kode (Codebase)**.

Awalnya diciptakan hanya untuk Mobile (Android & iOS). Namun kini, Flutter berevolusi hingga dapat melakukan ekspor (Build) ke ranah Web, Windows, macOS, dan Linux Native App Desktop.

Secara teknis, tidak sama seperti Javascript _frameworks_ (React Native / Ionic) yang membutuhkan jembatan perantara WebView yang lambat menuju mesin ponsel asli (Native OS rendering pipeline), Flutter menggambar *setiap piksel layarnya sendiri* di atas mesin render Skia / Impeller C++ Engine yang diusungnya. Menjadikannya jauh lebih cepat dengan performa 60 hingga 120 FPS secara *native*.

## Konsep Sakral Flutter: Everything Is a Widget

Di dunia Flutter, filosofi terpenting yang wajib kamu tanamkan di kepalamu adalah ini: **Segala Sesuatu adalah Widget**. 
Apakah itu sebuah tombol? Itu widget. Teks? Itu Widget. Tepi bulatan Padding layar? Itu Widget. Bahkan seluruh layarmu (*Screen*) itu hanyalah gabungan Widget besar yang menampung ratusan Widget-Widget kecil lainnya!

Pikirkan Widget layaknya blok mainan Lego. Kamu menyusun bongkahan Lego kecil (Teks, Ikon, Warna) di dalam bongkahan Lego medium (Baris, Kolom, Kotak Box) untuk menjadi sebuah Lego besar utuh yang dinamakan Halaman Profil Pengguna (*App Profile Screen*).

## Struktur Main Flutter

Mirip seperti Program Dart mandiri, Flutter dieksekusi dari `void main()`.

Sebuah aplikasi dasar struktur Flutter terlihat seperti ini:

```dart
import 'package:flutter/material.dart';

// Fungsi utama aplikasi berjalan
void main() {
  runApp(const MyApp());
}

// MyApp adalah "Widget"
class MyApp extends StatelessWidget {

  // ini adalah constructor
  const MyApp({super.key});

  // ini adalah method build yang akan membuat tampilan widget
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'App Raion Internship',
      home: Text("Halo Peserta Raion Internship 2026!"),
    );
  }
}
```
