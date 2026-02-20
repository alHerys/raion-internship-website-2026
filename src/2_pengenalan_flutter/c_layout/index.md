---
next:
  text: "Pengenalan State (State Management)"
  link: "../../3_pengenalan_state/a_pengertian/"
---

# Menyusun Layout UI

Aplikasi yang indah tidak hanya terdiri dari tumpukan teks yang menggantung tak beraturan. Dibutuhkan sebuah sistem tata letak (*Layout System*) untuk mensejajarkan posisi mereka ke Kiri, Kanan, Atas, maupun menumpuknya satu sama lain secara dinamis terlepas dari ukuran layar (Mobile yang kecil atau Desktop yang lega).

Widget utama layout adalah `Row`, `Column`, `Container`, dan `Stack`.

## 1. Menyusun Vertikal: `Column`
Jika kamu ingin menyusun widget di layar berbaris **dari Atas ke Bawah**, gunakan Widget penampung `Column`.
Sebuah Column bisa menangkap lebih dari satu anak menggunakan properti Array list bernama `children: []`.

```dart
Column(
  mainAxisAlignment: MainAxisAlignment.center, // Pusatkan susunan ke tengah layar atas-bawah
  children: [
    Text("Atas"),
    Text("Tengah"),
    Text("Bawah"),
  ]
)
```

## 2. Menyusun Horizontal: `Row`
Kebalikannya, jika kamu ingin menyusun profil avatar di sebelah kiri dari nama pengguna **(Menyamping Kiri ke Kanan)**, gunakan `Row`.

```dart
Row(
  mainAxisAlignment: MainAxisAlignment.spaceBetween, // Menyebarkan jarak anak-anak ke ujung spasi layar
  children: [
    Icon(Icons.person),
    Text("Raion Intern"),
    Icon(Icons.arrow_forward),
  ]
)
```

## 3. `Container`
Sebuah `Container` tidak terlihat sama sekali secara fisik kecuali kita memberikan warna kepadanya. Ini adalah kardus virtual tempat orang-orang membungkus widget lain agar ia dapat diberi **Warna, Ruang Pojok (Padding & Margin), serta lengkungan sudut**.

```dart
Container(
  padding: const EdgeInsets.all(16.0), // Jarak ke dalam (memperbesar dinding)
  margin: const EdgeInsets.only(top: 20), // Jarak menolak keluar 
  decoration: BoxDecoration(
    color: Colors.blue, // Harus diletakkan di dalam decoration jika BoxDecoration dipakai
    borderRadius: BorderRadius.circular(12),
  ),
  child: const Text("Teks ini terkurung cantik di dalam Kotak Biru dengan sudut melengkung!"),
)
```

## 4. `Stack`
Saat Row menyamping, dan Column ke bawah, apa yang terjadi jika ingin menaruh tulisan Persis _"DI ATAS"_ tumpukan Gambar Background? `Stack` solusinya!
Komponen paling bawah dari list `children` di kode, akan berada di layer terdepan paling mendekati mata pengguna layar.

```dart
Stack(
  alignment: Alignment.center,
  children: [
    Container(width: 200, height: 200, color: Colors.blue), // Layer dasar
    Container(width: 100, height: 100, color: Colors.red),  // Layer menumpuk biru
    Text("Terkena Tumpukan!"),                              // Layer paling atas pucuk
  ],
)
```

## Coba Sendiri: Interaktif Layout Builder!

Mari bereksperimen menggabungkan Column, Row, Container dan Stack untuk membuat *Card Profil* sederhana peserta Magang!
Silakan klik tombol *Run* pada DartPad di bawah. Coba ubah nilai `MainAxisAlignment` atau warna kotaknya.

<iframe src="https://dartpad.dev/embed-flutter.html?theme=dark&run=true&split=false&id=9e13a7f2c92f3d1a0ef028dafe611923" style="width:100%; height:500px; border:0; border-radius: 8px;"></iframe>