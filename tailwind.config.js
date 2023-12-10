/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

