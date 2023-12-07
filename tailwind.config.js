/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn'],
      },
    },
  },
  darkMode: "class",
  // add daisyUI plugin
  plugins: [require("daisyui")],
}

