/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'regal-blue': '#243c5a',
      },
      fontFamily: {
        sans: ['Vazirmatn'],
      },
    },
  },
  darkMode: "class",
  // add daisyUI plugin
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}

