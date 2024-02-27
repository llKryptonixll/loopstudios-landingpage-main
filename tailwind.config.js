/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
        dark_gray: "hsl(0, 0%, 55%)",
        very_dark_gray: "hsl(0, 0%, 41%)",
      },
      fontSize: {
        base: "15px",
      },
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        josefin_sans: ["Josefin Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}