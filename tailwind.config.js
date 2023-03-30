const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        gray: colors.neutral,
        electric: '#db00ff',
        ribbon: '#0047ff',
        'glossary-table': '#e2d1d1',
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
