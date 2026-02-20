---
next:
  text: "Pemrograman Berorientasi Objek (OOP) di Dart"
  link: "../e_oop/"
---

# Control Flow

## Percabangan Bersyarat (If / Else & Switch)

Kombinasi `if`, `else if`, dan `else`:

```dart
int baterai = 15;

if (baterai == 100) {
  print("Handphone Penuh");
} else if (baterai <= 15) {
  print("Segera charge handphone kamu!"); 
} else {
  print("Baterai aman");
}
```

Dan tentu saja evaluasi Switch (Kini lebih kuat berkat *Pattern Matching* Dart versi anyar):

```dart
String grade = 'A';

switch (grade) {
  case 'A':
    print('Sempurna!');
    break; 
  case 'B':
    print('Lumayan Bagus');
    break;
  default:
    print('Belajar lagi ya');
}
```

## Perulangan (Looping)

### For Loop

Perulangan `for` klasik dengan inisiasi, batas operasi, dan auto-increment.
Sangat cocok saat kamu tahu pasti berapa kali loop akan berjalan.

```dart
// Persis seperti di Java / C++
for (int i = 0; i < 5; i++) {
  print("Cetakan ke-$i");
}
```

### For-In (Enhanced Loop)

Saat memproses sebuah list (*array*/daftar), Flutter sangat sering menggunakan ini untuk mengonversi List data teks mentah menjadi sekumpulan komponen layarnya (Widgets).

```dart
List<String> keranjangBelanja = ['Baju', 'Kemeja', 'Jaket'];

for (var barang in keranjangBelanja) {
  print("Checkout barang: $barang");
}
```

### While & Do-While

```dart
int hpLevel = 100;
while(hpLevel > 0) {
  // Logic serang monster
  hpLevel -= 10;
}
```

## Penanganan Pengecualian Error (Try / Catch)

```dart
try {
  int result = 50 ~/ 0; // Berusaha membagi dengan NOL!
} catch (e) {
  print('Terjadi sebuah error sistem: $e'); // UI bisa menampilkan notifikasi error yang bersahabat
} finally {
  print("Ini akan selalu dipanggil di akhir walau proses sukses atau erro!");
}
```


## Coba Sendiri: Interaktif DartPad

Daripada sekadar membaca teori *Control Flow* di atas, mari buat logika *If / Else* dinamis berdasar input Looping `for`:

<iframe src="https://dartpad.dev/embed-dart.html?theme=dark&run=true&split=false&id=ad04aa8506b1e79c97067d595249e814" style="width:100%; height:400px; border:0; border-radius: 8px;"></iframe>