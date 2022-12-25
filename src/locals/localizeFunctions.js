import React from 'react';
import {I18nManager} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import * as RNLocalize from 'react-native-localize';
import {setLocale} from '../locals/i18n';

export const handleToggleLang = async () => {
  let current_lang = await AsyncStorage.getItem('currentLang');
  if (current_lang.includes('ar')) {
    try {
      await AsyncStorage.setItem('currentLang', 'en');
      if (I18nManager.isRTL) {
        I18nManager.forceRTL(false);
        I18nManager.allowRTL(false);
      }
      RNRestart.Restart();
    } catch (e) {
      console.log('some error happened', e);
    }
  } else if (current_lang.includes('en')) {
    try {
      await AsyncStorage.setItem('currentLang', 'ar');
      if (!I18nManager.isRTL) {
        I18nManager.forceRTL(true);
        I18nManager.allowRTL(true);
      }
      RNRestart.Restart();
    } catch (e) {
      console.log('some error happened', e);
    }
  }
};

export const setAppLanguage = async () => {
//   let currentLang = await AsyncStorage.getItem('currentLang');
//   if (currentLang) {
//     setLocale(currentLang);
//   } else {
//     let user_prefered_language = RNLocalize.getLocales()[0];
//     setLocale(user_prefered_language.languageCode);
//     await AsyncStorage.setItem(
//       'currentLang',
//       user_prefered_language.languageCode,
//     );
//   }

    setLocale('ar');
};

export const handleLocalizationChange = async () => {
  let user_prefered_locale = RNLocalize.getLocales()[0];
  let current_lang = await AsyncStorage.getItem('currentLang');
  if (!current_lang) {
    if (user_prefered_locale.isRTL) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
      RNRestart.Restart();
    } else {
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
      RNRestart.Restart();
    }
  }
};
