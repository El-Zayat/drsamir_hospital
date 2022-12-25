import { I18n } from "i18n-js";
import ar from './ar';
import en from './en';

const translations = {
  en: en,
  ar: ar,
};

let i18n = new I18n(translations);

i18n.fallbacks=true

i18n.locale = "en";

export const setLocale = (locale) => {
  i18n.locale = locale;
};

export const getCurrentLocale = () => i18n.locale;

export default i18n