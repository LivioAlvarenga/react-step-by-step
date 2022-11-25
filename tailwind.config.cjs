/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "sans-serif"],
      },
      colors: {
        font: "#212121",
        primaria: "#23A3BC",
        error: "#d50000",
        normal: "#fafafa",
        dark: "#f5f5f5",
        darkest: "#e0e0e0",
      },
    },
  },
  plugins: [],
};
