import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next,  } from 'react-i18next';

import translationsPTBR from './locales/pt-br.json';
import translationsENUS from './locales/en-us.json';
import translationsESES from './locales/es-es.json';

const i18nConfig = {
  resources: {
    'pt-BR': translationsPTBR,
    'en-US': translationsENUS,
    'es-ES': translationsESES
  },
  fallbackLng: 'pt-BR',
  defaultNS: 'translations'
}

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init(i18nConfig)

export default i18n
