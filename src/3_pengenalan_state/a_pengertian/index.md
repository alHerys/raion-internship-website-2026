---
next:
  text: "Pengenalan Navigasi Halaman"
  link: "../../4_pengenalan_navigation/a_pengertian/"
---

# Pengenalan State Management

Pada modul sebelumnya tentang "Stateless vs Stateful", kita telah menyentuh dasar State Management paling pertama di Flutter, yaitu: **`setState()`**.
Ini adalah mekanisme bawaan (*Internal State*) bagi Flutter untuk me-refresh layar saat ada data yang berubah.

Namun, dalam membangun aplikasi yang berskala besar seperti Toko Online *ShopEase*, `setState()` saja lambat laun akan memicu masalah arsitektur besar.

## Mengapa `setState` Tidak Selamanya Cukup?

Bayangkan hirarki *Widget Tree* di bawah ini:

```text
Aplikasi Belanja
├── Halaman Daftar Produk (Ada Tombol '+ Keranjang')
└── Halaman Keranjang Belanja (Ada Teks 'Total: 5 Item')
``` 

Jika kamu hanya menggunakan `setState` pada "Halaman Daftar Produk", bagaimana caranya "Halaman Keranjang" yang letaknya di pohon berbeda tau bahwa total pesanan telah bertambah?
Kamu harus mengoper data tersebut turun-naik ke *Parent* teratas lalu mengopernya kembali ke bawah (Prop Drilling). Ini sangat rumit, rawan bug, dan membuat performa aplikasi sangat lambat jika halamannya banyak.

## Konsep State Management

Di ekosistem Flutter, terdapat beragam State Management pihak ketiga yang populer:

1. **Provider**: Solusi rekomendasi dasar orisinal Google paling stabil.
2. **GetX**: Populer karena sangat mudah dan tidak banyak mengandalkan `BuildContext`.
3. **BLoC (Business Logic Component)**: Standar *Enterprise* dan sangat banyak dipakai di industri.
4. **Riverpod**: Evolusi penyempurnaan dari Provider.

## Mengenal Cubit

**Cubit** adalah versi ringan dari BLoC. Konsep utamanya sangat sederhana:
1. **State:** Representasi data/kondisi saat ini (misalnya `int nilaiKeranjang = 0`).
2. **Function:** Method yang dipanggil oleh UI (misalnya `tambahKeranjang()`) yang bertugas memproses data lalu mengeluarkan (*emit*) **State** baru.

UI kemudian cukup menggunakan widget bernama `BlocBuilder` untuk "mendengarkan" perubahan State yang dikeluarkan oleh Cubit. Setiap kali ada state baru yang di-*emit*, `BlocBuilder` akan otomatis me-render ulang tampilannya.

---

## Contoh Cubit 

> ```dart
> import 'package:flutter/material.dart';
> import 'package:flutter_bloc/flutter_bloc.dart';
> 
> // 1. INI ADALAH GUDANG DATA GLOBAL KITA (BUSINESS LOGIC)
> // Mewakili state management sederhana menggunakan Cubit
> class KeranjangCubit extends Cubit<int> {
>   // Nilai awal keranjang adalah 0
>   KeranjangCubit() : super(0);
> 
>   void tambahBarang() {
>     // emit() bertugas mengeluarkan STATE (data) terbaru ke UI
>     emit(state + 1); 
>   }
>   
>   void kurangiBarang() {
>     if (state > 0) emit(state - 1);
>   }
> }
> 
> void main() {
>   runApp(
>     // Membungkus aplikasi dengan Provider agar Gudang Cubit bisa diakses oleh Halaman Halaman di bawahnya (TokoScreen)
>     BlocProvider(
>       create: (context) => KeranjangCubit(),
>       child: const MaterialApp(home: TokoScreen()),
>     ),
>   );
> }
> 
> // 2. INI ADALAH TAMPILAN UI (PRESENTATION) 
> class TokoScreen extends StatelessWidget {
>   const TokoScreen({super.key});
> 
>   @override
>   Widget build(BuildContext context) {
>     return Scaffold(
>       appBar: AppBar(title: const Text('Toko Internship 2026')),
>       body: Center(
>         child: Column(
>           mainAxisAlignment: MainAxisAlignment.center,
>           children: [
>             // BlocBuilder bertugas "Subscribe" dan me-render ulang UI saat ada pergantian State dari Cubit
>             BlocBuilder<KeranjangCubit, int>(
>               builder: (context, state) {
>                 return Text("Total Keranjang: $state Item", style: const TextStyle(fontSize: 24));
>               },
>             ),
>             const SizedBox(height: 20),
>             Row(
>               mainAxisAlignment: MainAxisAlignment.center,
>               children: [
>                 // context.read digunakan untuk memanggil aksi (function) di Cubit ATAU sekedar mengambil data statis 1 kali
>                 ElevatedButton(
>                   onPressed: context.read<KeranjangCubit>().kurangiBarang, 
>                   child: const Text("Kurangi")
>                 ),
>                 const SizedBox(width: 10),
>                 ElevatedButton(
>                   onPressed: context.read<KeranjangCubit>().tambahBarang, 
>                   child: const Text("Tambah (+)")
>                 ),
>               ],
>             )
>           ],
>         ),
>       ),
>     );
>   }
> }
> ```
