---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "RAION INTERNSHIP\n2026 🦁"
  text: ""
  tagline: Mobile Development Learning Path.
  actions:
    - theme: brand
      text: Raion Community Instagram
      link: https://www.instagram.com/raion_community/
    - theme: alt
      text: Flutter Official Website
      link: https://flutter.dev/
    - theme: alt
      text: DartPad Playground
      link: https://dartpad.dev/

features:
  - icon: 📱
    title: Instalasi Flutter
    details: Panduan memeriksa dependensi mobile, instalasi Flutter SDK, Git, dan setup Android Studio / VS Code.
    link: ./src/0_instalasi_flutter/

  - icon: 💙
    title: Pengenalan Dart
    details: Dart adalah bahasa pemrograman modern, aman, dan berorientasi objek yang digunakan untuk mengembangkan aplikasi Flutter.
    link: ./src/1_pengenalan_dart/a_pengertian/

  - icon: 🦋
    title: Pengenalan Flutter
    details: Flutter adalah UI toolkit dari Google untuk membangun aplikasi natively compiled yang indah dari satu codebase.
    link: ./src/2_pengenalan_flutter/a_pengertian/

  - icon: 🚩
    title: Pengenalan State
    details: Memahami bagaimana Flutter mengelola perubahan data (State) untuk memperbarui tampilan antarmuka pengguna (UI).
    link: ./src/3_pengenalan_state/a_pengertian/

  - icon: 📍
    title: Pengenalan Navigation
    details: Mekanisme dasar perpindahan antar halaman menggunakan Navigator dan Named Routes dalam aplikasi Flutter.
    link: ./src/4_pengenalan_navigation/a_pengertian/

  - icon: 🏛️
    title: Clean Architecture
    details: Pengenalan pola arsitektur yang memisahkan kode ke dalam layer (Domain, Data, Presentation) agar aplikasi lebih mudah dikelola.
    link: ./src/5_clean_architecture/a_pengertian/
---

## Explore Lebih Lanjut! 📺

<div class="video-container">
  <iframe width="300" height="170" src="https://www.youtube.com/embed/3kaGC_DrUnw?si=VZxum1oVugxCdBUd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<style>
  .video-container {
    display: flex;
    overflow-x: auto;
    gap: 16px;
    padding: 16px 0;
  }

  .video-container iframe {
    flex: 0 0 auto;
  }

  .video-container::-webkit-scrollbar {
    display: none;
  }

</style>

<hr>

# Connect with us!

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { leadCoLead } from './models/team-members.ts'
</script>

<VPTeamMembers size="medium" :members="leadCoLead" />
