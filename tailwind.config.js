/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      /* =========================
         BREAKPOINTS CUSTOM
      ========================= */
      screens: {
        xs: "470px",
        nav: "815px",
      },

      /* =========================
         COLORS — CODIFY DESIGN
      ========================= */
      colors: {
        background: "rgb(var(--color-background-rgb) / <alpha-value>)",
        surface: "rgb(var(--color-surface-rgb) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground-rgb) / <alpha-value>)",
        muted: "rgb(var(--color-muted-rgb) / <alpha-value>)",

        vert: "#12a000",
        "primary-dark": "#0c5f01",
      },

      /* =========================
         SHADOW — NEOMORPHISM / 3D
      ========================= */
      boxShadow: {
        neo: "3px 3px 3px #090811, -3px -3px 3px #1a182f",
      },

      /* Support pour le theme light */
      data: {
        "theme-light": 'data-theme~="light"',
      },

      /* =========================
         TYPOGRAPHY
      ========================= */
      fontFamily: {
        michroma: ["Michroma", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
    },
  },

  plugins: [],
};
