const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'th',
    locales: ['en', 'th'],
  },
  interpolation: {
    prefix: '{',
    suffix: '}',
  },
  localeDetection: true,
  localeStructure: '{lng}/{ns}',
  localePath: path.resolve('./src/locales')
};