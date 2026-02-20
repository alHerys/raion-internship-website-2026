---
next:
  text: "UI Dasar (Row, Column, Container)"
  link: "../c_layout/"
---

# Stateless vs Stateful Widgets

State adalah **data informasi terkini (kondisi/wujud)** sebuah widget pada saat ia mulai dirender (digambar piksel per piksel) ke layar HP kita. Contoh: Warna keranjang merah/biru, Total pesanan di keranjang, Centang atau tidaknya box persetujuan `Checkbox`.

Karena fungsi dari UI seringkali bergantung pada seberapa statis (Tetap/Mati) atau dinamis (Bisa Berubah) sebuah komponen antarmuka, Flutter membaginya menjadi dua faksi Class Widget Utama: **Stateless** dan **Stateful**.

## 1. StatelessWidget

*StatelessWidget* adalah komponen yang statis. Sejak dia diciptakan (diinstansiasi di file memori) sampai dengan aplikasi berjalan, wujud fisiknya, isi tulisannya, warnanya tidak akan pernah dapat diubah-ubah.

```dart

class TeksSambutanAja extends StatelessWidget {
  final String sambutanText; // Wajib final krn state gak bisa diganti

  const TeksSambutanAja(this.sambutanText, {super.key});

  @override
  Widget build(BuildContext context) {
    return Text(sambutanText); 
  }
}
```

> Kapan Memakainya?
> Hanya gunakan *Stateless* untuk komponen dekorasi tetap seperti: Teks Logo Aplikasi, Ikon *Bottom Bar*, dan Card hiasan pasif.

## 2. StatefulWidget

*StatefulWidget* adalah komponen layaknya saklar atau termometer, ia mengetahui kondisi (State) *internal* mereka masing-masing dan **dapat Merender Ulang `build()` untuk memperbarui tampilan UI ke layar hp jika `State` itu diperintahkan untuk diubah pengguna.**

Pembuatan faksi hirarki memori `StatefulWidget` dipecah jadi dua Kelas besar secara berpasangan *(The configuration Class & The State Box Storage Class)* :

```dart
// BAGIAN 1: Kelas Kerangka Pembungkus Luar (hanya konfigurasi ID/parameter awal saja)
class LampuAjaib extends StatefulWidget {
  const LampuAjaib({super.key});

  @override
  State<LampuAjaib> createState() => _LampuAjaibState();
}

// BAGIAN 2: Kelas State (Memori Dalam) tempat data bisa digoyang dan UI me-render ulang `build()`
class _LampuAjaibState extends State<LampuAjaib> {
  // Ini adalah State kita
  bool nyala = false;

  void ubahSaklar() {
    // memanggil setState untuk merender ulang widget
    setState(() { 
      nyala = !nyala; 
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Icon(Icons.lightbulb, color: nyala ? Colors.yellow : Colors.grey),
        ElevatedButton(
          onPressed: ubahSaklar,
          child: Text(nyala ? "Matikan" : "Nyalakan"),
        ),
      ],
    );
  }
}
```

## Coba Sendiri: Interaktif DartPad

Coba jalankan dengan tombol *Run*, lalu klik berkali-kali pada Floating Action Button berwarna biru tersebut. Amati bagaimana hanya angka teks tersebut yang ter-render ulang setiap kali fungsi *Click* memanggil `setState`.

<iframe src="https://dartpad.dev/embed-flutter.html?theme=dark&run=true&split=false&id=f0c1802141b651266f520396d27a6c26" style="width:100%; height:500px; border:0; border-radius: 8px;"></iframe>