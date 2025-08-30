// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Rubik Mono One", "monospace"],
      },
      keyframes: {
        wave: {
          to: { "margin-left": "-51%" }
        }
      },
      animation: {
        wave: "wave 1.5s ease-in-out infinite"
      },
    },
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
};
