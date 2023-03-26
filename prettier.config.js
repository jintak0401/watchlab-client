module.exports = {
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  tailwindConfig: './tailwind.config.js',
  importOrderSortSpecifiers: true,
  plugins: [require('prettier-plugin-twin.macro')],
};
