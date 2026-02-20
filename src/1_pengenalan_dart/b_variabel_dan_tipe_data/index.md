---
next:
  text: "Functions (Named Parameters)"
  link: "../c_function/"
---

# Variabel dan Tipe Data

Pendeklarasian variabel dalam Dart akan terasa sangat alami jika kamu sudah terbiasa dengan C++ atau Java. 

## Tipe Data Dasar

Dart memiliki kumpulan tipe data bawaan yang sama persis:
- **`int`** : Bilangan bulat
- **`double`** : Bilangan desimal.
- **`String`** : Teks
- **`bool`** : *true* atau *false*.

```dart
int age = 21;
double ipk = 3.9;
String name = 'Alex';
bool isGraduated = false;
```

## `var`, `final`, dan `const`

```dart
// Dart otomatis tahu variabel ini ber-tipe String.
var kampus = 'Universitas Brawijaya'; 
```

### Immutable dengan `final` dan `const`

- **`final`**: Variabel tidak bisa didefinisikan ulang setelah nilai pertamanya di-assign. (Sama seperti tipe kata kunci `final` di Java).
- **`const`**: Konstanta *Compile-Time*. Nilainya harus sudah pasti *sebelum* program dijalankan. (Mirip dengan `#define` const atau `constexpr` di C++).

```dart
final timeNow = DateTime.now(); // BISA! (Dieksekusi saat aplikasi berjalan)
// const startApp = DateTime.now(); // ERROR! (Karena waktu selalu berjalan, tidak statis)

const phi = 3.14; // BISA! (Sudah jelas sejak awal sebelum aplikasi dirunning)
```

## Coba Sendiri: Interaktif DartPad

Daripada sekadar membaca, mari coba modifikasi kode variabel ini secara langsung!
Ubah nilai `var namaKamu = '[Ketik Namamu]';` menjadi namamu sendiri, lalu klik tombol **Run**.

<iframe src="https://dartpad.dev/embed-dart.html?theme=dark&run=true&split=false&id=7f61ff81e8eba506728befcb77846e42" style="width:100%; height:400px; border:0; border-radius: 8px;"></iframe>