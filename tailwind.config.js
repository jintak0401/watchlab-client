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
        'study-cell': '#cdb5b6',
      },
      fontFamily: {
        cormor: ['var(--font-cormorant-garamond)', ...fontFamily.serif],
        crimson: ['var(--font-crimson-text)', ...fontFamily.serif],
        'crimson-pro': ['var(--font-crimson-pro)', ...fontFamily.serif],
        inknut: ['var(--font-inknut-antiqua)', ...fontFamily.serif],
      },
      backgroundImage: {
        glossary: "url('/static/images/glossary/background.webp')",
        study: "url('/static/images/study/background.webp')",
        manual: "url('/static/images/manual/background.webp')",
      },
    },
  },
  plugins: [],
};
