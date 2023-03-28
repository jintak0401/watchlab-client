const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
      fontFamily: {
        cormor: ['var(--font-cormorant-garamond)', ...fontFamily.sans],
      },
      backgroundImage: {
        glossary: "url('/static/images/glossary/background.webp')",
      },
    },
  },
  plugins: [],
};
