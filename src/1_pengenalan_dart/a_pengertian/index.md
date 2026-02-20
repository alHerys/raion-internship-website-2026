---
next:
  text: "Variabel dan Tipe Data Dart"
  link: "../b_variabel_dan_tipe_data/"
---

# Pengenalan Dart

## Apa itu Dart?
Dart adalah bahasa pemrograman lintas platform (cross-platform) buatan Google. Jika kamu pernah menggunakan Java atau C++, kamu akan merasa sangat familiar saat menggunakan Dart. Dart diciptakan pertama kali pada tahun 2011 sebagai bahasa _web_, namun popularitasnya meledak setelah digunakan sebagai bahasa utama untuk framework UI revolusioner Google: **Flutter**.

Dart dapat dikompilasi *Just-in-Time* (JIT) untuk siklus *development* yang cepat (seperti fitur *Hot Reload* di Flutter), dan dikompilasi *Ahead-of-Time* (AOT) menjadi kode mesin asli (native) ARM atau x64 untuk performa produksi yang sangat tinggi.

## Komparasi Dasar dengan Java & C++

Sebagai developer Java / C++, transisi ke Dart sangat mudah. Mari kita lihat perbandingannya:

### 1. Titik Masuk Utama (Main Function)
Sama seperti Java dan C++, eksekusi program berbasis Dart selalu dimulai dari fungsi `main()`.

**C++:**
```cpp
#include <iostream>
int main() {
    std::cout << "Hello, World!";
    return 0;
}
```

**Java:**
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

**Dart:**
```dart
void main() {
  print('Hello, World!');
}
```
*Perhatikan:* Di Dart, `main()` tidak perlu berada di dalam struktur class, dan kamu tidak perlu menggunakan Array `args` jika tidak diperlukan.

## Kenapa Kamu Harus Belajar Dart?

- **Optimasi Mobile & Web:** Dart dirancang dari awal untuk performa maksimal pada pembangunan antarmuka klien (UI).
- **Semantik Familiar:** Transisi paling mulus dibandingkan dari Java ke JavaScript atau bahasa lainnya. Jika kamu tahu OOP Java, kamu tahu 90% cara kerja Dart.
- **Null Safety:** Mengurangi _NullPointerException_ (musuh bebuyutan programmer Java) langsung di tingkat *Compiler*.
- **Ekosistem Satu Pintu:** Jika kamu bisa bahasa Dart, kamu secara otomatis sudah bisa membuat aplikasi *Android, iOS, Web, Windows, macOS, dan Linux* (dengan Flutter).
