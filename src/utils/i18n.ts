import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

// Import translation files
import enTranslation from '../locales/en/translation.json';
import enCommon from '../locales/en/common.json';
import siTranslation from '../locales/si/translation.json';
import siCommon from '../locales/si/common.json';
import taTranslation from '../locales/ta/translation.json';
import taCommon from '../locales/ta/common.json';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
        common: enCommon
      },
      si: {
        translation: siTranslation,
        common: siCommon
      },
      ta: {
        translation: taTranslation,
        common: taCommon
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    ns: ['translation', 'common'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;