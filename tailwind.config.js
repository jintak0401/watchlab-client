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
        cream: '#eeeae3',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotateZ(0deg)' },
          '100%': { transform: 'rotateZ(360deg)' },
        },
      },
      animation: {
        'spin-hour': 'spin 43200s linear infinite',
        'spin-minute': 'spin 3600s linear infinite',
        'spin-second': 'spin 60s linear infinite',
      },
      fontFamily: {
        serif: ['var(--font-libre-baskerville)', ...fontFamily.serif],
        cormor: ['var(--font-cormorant-garamond)', ...fontFamily.serif],
        crimson: ['var(--font-crimson-text)', ...fontFamily.serif],
        'crimson-pro': ['var(--font-crimson-pro)', ...fontFamily.serif],
        inknut: ['var(--font-inknut-antiqua)', ...fontFamily.serif],
        della: ['var(--font-della-respira)', ...fontFamily.serif],
        franklin: ['var(--font-libre-franklin)', ...fontFamily.serif],
      },
      backgroundImage: {
        glossary: "url('/static/images/glossary/background.webp')",
        study: "url('/static/images/study/background.webp')",
        manual: "url('/static/images/manual/background.webp')",
        profiles: "url('/static/images/profiles/background.jpg')",
      },
    },
  },
  plugins: [],
};
