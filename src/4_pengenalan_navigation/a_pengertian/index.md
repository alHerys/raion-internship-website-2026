---
next:
  text: "Clean Architecture Dasar"
  link: "../../5_clean_architecture/a_pengertian/"
---

# Pengenalan Navigation

Aplikasi modern tidak hanya berdiri di satu halaman profil *Scroll*. Pasti ada suatu waktu di mana pengguna menekan List Barang dan aplikasi meluncur melompat (Navigasi) menuju Halaman Detail Barang tersebut.

Dalam Flutter, komponen yang mengontrol pergerakan pindah-pindah layar dinamakan **`Navigator`**. Mekanisme di baliknya adalah sebuah struktur Stack Bertumpuk.

## Tumpukan Halaman (Route Stack)
Ketika kamu melompat dari Home -> Detail Produk: Detail Produk disuntikkan (Push) ke atas tumpukan Home.
Ketika kamu memencet tombol *Back* (Kembali): Detail produk dihancurkan (Pop) dikeluarkan dari atas tumpukan, sehingga Halaman Home kembali terlihat.

## Mekanisme Push dan Pop Klasik

Flutter memiliki sintaks statis material klasik bawaan tanpa *Library* tambahan jika kita ingin menavigasi layar sederhana:

### Melompat Layar Baru (`Navigator.push`)
```dart
onPressed: () {
  Navigator.push(
    context, // Penting! Navigasi butuh tau domisili kita sedang di layar mana
    MaterialPageRoute(builder: (context) => SecondRouteScreen()),
  ); // Sekarang SecondRoute Screen menutupi layar lama
}
```

### Kembali ke Layar Sebelumnya (`Navigator.pop`)
Bagaimana jika pengguna ingin membatalkan transaksi dan balik layar sebelumnya?
```dart
onPressed: () {
  Navigator.pop(context); // Lempar Halaman ini ke Trash, tampilkan sisa Tumpukan di bawahnya.
}
```

## Named Routes

Ketika aplikasimu di *Milestone Level 3* nanti membesar (`Home`, `Checkout`, `Profil`, `Settings`, dkk). Memanggil fungsi `MaterialPageRoute(builder...` berkali-kali sangat merepotkan.
Untuk itu, kita dapat mendaftarkan "Nama" (Alias) untuk setiap layar di puncak kode (`MaterialApp` - `main.dart`), persis selayaknya jalur URL pada Website:

```dart
MaterialApp(
  initialRoute: '/', // Rute awal saat aplikasi dibuka
  routes: {
    // Definisi Dictionary URL : Layar Widget
    '/': (context) => const HomeScreen(),
    '/detail': (context) => const DetailItemScreen(),
    '/profile': (context) => const ProfileScreen(),
  },
);
```

Setelah didaftarkan, pemanggilan pindah layar cukup memanggil string namanya saja:
```dart
// Untuk pindah ke layar profil:
Navigator.pushNamed(context, '/profile');

// Untuk mengganti paksa layar tanpa bisa menekan Tombol Kembal/Back (Sering dipakai setelah Layar Login Sukses)
Navigator.pushReplacementNamed(context, '/home_dashboard');
```

> Jika di Raion Internship 2026 ini kamu merasa tertantang, pelajari *Package Library 3rd Party* `GoRouter` di dokumentasi resmi Flutter. `GoRouter` merupakan navigasi Declarative tingkat lanjut yang kini menjadi standar industri Google sejak peluncuran dukungan Full Flutter for Web (Untuk menangani Deep Linking dan Forwarding URL Address).  
