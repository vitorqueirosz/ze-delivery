import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import AsyncStorage from '@react-native-community/async-storage';
import Routes from './src/routes';
import { store, persistor } from './src/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#222" />
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Routes />
      {/* </PersistGate> */}
    </Provider>
  );
}
