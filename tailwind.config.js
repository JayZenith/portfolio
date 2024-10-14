/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'custom': ["Rubik Mono One", "monospace"],
      },
    },
  },
  plugins: [],
}