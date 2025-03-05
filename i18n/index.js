// import de from 'js-yaml-loader!./translations.de.yaml';
// import en from 'js-yaml-loader!./translations.en.yaml';

var en = require("./translations.en.json");
var fa = require("./translations.fa.json");

const i18n = {
  translations: {
    en: en.i18n,
    fa: fa.i18n,
  },
  defaultLang: "en",
  useBrowserDefault: true,
};

module.exports = i18n;
