---
next:
  text: "Control Flow"
  link: "../d_control_flow/"
---

# Functions (Fungsi di Dart)

## Struktur dan Arrow Function

Sama dengan C++, Dart mengizinkan adanya fungsi mandiri *(top-level function)* langsung di luar kelas:

```dart
// Void jika tidak mereturn nilai
void ucapSalam(String nama) {
  print('Halo $nama!');
}

// Menghitung sesuatu dan return String
String sapaBos(String nama) {
  return "Selamat pagi, bos $nama";
}
```

Menariknya, Dart memiliki fungsi singkat menggunakan sistem anak panah (Arrow) `=>` untuk fungsi yang isinya hanya satu statement:

```dart
// Kedua ini bekerja hal yang sama persis:
int bagiDuaA(int x) { return x ~/ 2; }
int bagiDuaB(int x) => x ~/ 2;
```

## Keunggulan Dart: Named Parameters

Dart memiliki **Named Parameters (Parameter Bernama)**. Kamu cukup menggunakan kurung kurawal `{}` di parameter setelah kurung biasa `()`.

```dart
// { } artinya parameter ini berformat Named Parameters.
void setStatusFlutter({String status = "Belajar", int lamaJam = 0}) {
  print('Status: $status selama $lamaJam Jam');
}

void main() {
  // Tanpa Named Parameters (kita harus hapal urutan, ini cara Java/C++)
  // setStatusFlutter("Tidur", 8); 

  // Menggunakan Named Parameters! Kita tak perlu takut tertukar dan tak peduli urutan:
  setStatusFlutter(lamaJam: 2, status: "Ngoding Flutter");
}
```

## Coba Sendiri: Interaktif DartPad

Mari uji fitur Named Arguments ini langsung pada fungsi sapaan. Cobalah modifikasi fungsi di bawah agar menampung `required int umur` dan kirim argumennya saat fungsi dipanggil!

<iframe src="https://dartpad.dev/embed-dart.html?theme=dark&run=true&split=false&id=bf2ff57907785085858031824bcf7b76" style="width:100%; height:400px; border:0; border-radius: 8px;"></iframe>