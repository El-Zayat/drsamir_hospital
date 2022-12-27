import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from 'react-query';
import * as RNLocalize from 'react-native-localize';
import {handleLocalizationChange} from './src/locals/localizeFunctions';
import Screens from './src/navigation/index';
import { LogBox, I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';

const queryClient = new QueryClient();

const App = () => {

  LogBox.ignoreLogs(['Setting a timer', "Each child in a list should have"]);

  useEffect(() => {
    SplashScreen.hide();
    // RNLocalize.addEventListener('change', handleLocalizationChange);
    // return () => {
    //   RNLocalize.removeEventListener('change', handleLocalizationChange);
    // };

    // Force rtl .. Remove this if you want to use multi language
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
    !I18nManager.isRTL && RNRestart.Restart()
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Screens />
    </QueryClientProvider>
  );
};

export default App;
