/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Bebas": 'Bebas Neue',
        "Bungee": 'Bungee Spice',
        "Inter": 'Inter',
      }
    },
  },
  plugins: [],
}