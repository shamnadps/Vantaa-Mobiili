import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import { translations } from './translations'

// Should the app fallback to English if user locale doesn't exists
I18n.locale = 'fi';

// Define the supported translations
I18n.translations = {
    ...translations
};

export const setLocale = (locale) => {
    I18n.locale = locale;
};

export const getCurrentLocale = () => I18n.locale;

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
    return I18n.t(name, params);
};

export default I18n;