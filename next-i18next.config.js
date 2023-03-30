const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'ko', 'jp', 'zh'],
    defaultLocale: 'en',
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
  },
};
