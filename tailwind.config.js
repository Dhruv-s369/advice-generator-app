/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-grayish-blue": "hsl(217, 19%, 24%)",
        "dark-blue": "hsl(218, 23%, 16%)",
        "neon-green": "hsl(150, 100%, 66%)",
        "ligh-cyan": "hsl(193, 38%, 86%)",
      },
      fontFamily: {
        "font-mon": "Manrope, sans-serif",
      }
    },
  },
  plugins: [],
}

