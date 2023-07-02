/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('../assets/img/1_big.gif')",
        'bg2': "url('../assets/img/2.gif')",
      }
    },
  },
  plugins: [],
}

