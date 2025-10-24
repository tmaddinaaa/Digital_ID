/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFB800", // warm gold yellow
        background: "#EDEDED", // neutral gray
        text: "#1F1F1F", // graphite
        card: "#FFFFFF", // white
        highlight: "#FFF4CC", // light amber
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
}
