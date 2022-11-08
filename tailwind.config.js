/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      titles: ["Playfair Display", "serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
