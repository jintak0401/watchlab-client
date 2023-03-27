const colors = require('tailwindcss/colors');

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
      backgroundImage: {
        glossary: "url('/static/images/glossary/background.webp')",
      },
    },
  },
  plugins: [],
};
