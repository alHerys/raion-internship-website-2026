import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RAION INTERNSHIP 2026",
  description: "Introduction to Dart and Flutter.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
    ],

    sidebar: [
      {
        text: "Instalasi Flutter 📱",
        link: "/src/0_instalasi_flutter/",
      },
      {
        text: "Pengenalan Dart 💙",
        items: [
          { text: "Pengertian dan Sejarah", link: "/src/1_pengenalan_dart/a_pengertian/" },
          { text: "Variabel dan Tipe Data", link: "/src/1_pengenalan_dart/b_variabel_dan_tipe_data/" },
          { text: "Function", link: "/src/1_pengenalan_dart/c_function/" },
          { text: "Control Flow", link: "/src/1_pengenalan_dart/d_control_flow/" },
          { text: "Konsep OOP", link: "/src/1_pengenalan_dart/e_oop/" },
        ],
      },
      {
        text: "Pengenalan Flutter 🦋",
        items: [
          { text: "Pengertian dan Konsep Dasar", link: "/src/2_pengenalan_flutter/a_pengertian/" },
          { text: "Stateless vs Stateful", link: "/src/2_pengenalan_flutter/b_stateless_stateful/" },
          { text: "UI Layout", link: "/src/2_pengenalan_flutter/c_layout/" },
        ],
      },
      {
        text: "Pengenalan State 🚩",
        items: [
          { text: "Pengertian State", link: "/src/3_pengenalan_state/a_pengertian/" },
        ],
      },
      {
        text: "Pengenalan Navigation 📍",
        items: [
          { text: "Basic Navigation & Named Routes", link: "/src/4_pengenalan_navigation/a_pengertian/" },
        ],
      },
      {
        text: "Clean Architecture 🏛️",
        items: [
          { text: "Pengertian Clean Architecture", link: "/src/5_clean_architecture/a_pengertian/" },
        ],
      },
    ],

    socialLinks: [
      { icon: "instagram", link: "https://www.instagram.com/raion_community/" },
      { icon: "linkedin", link: "https://www.linkedin.com/company/raioncommunity/" },
    ],

    search: {
      provider: "local",
    },
  },
});
