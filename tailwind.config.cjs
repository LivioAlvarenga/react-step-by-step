/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
    },
      colors: {
        font: "#282c34",
        fontS: "#6d6d6d",
        primaria: "#23A3BC",
        secundaria: "#20232a",
        error: "#d50000",
        normal: "#ffffff",
        dark: "#f7f7f7",
        darkest: "#e0e0e0",
        comment: "#ffe564",
        destaque: "#bbeffd4d",
      },
    },
  },
  plugins: [],
};
