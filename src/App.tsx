import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Navigation from '@/navigation/index';
import AuthProvider from '@/context/AuthProvider';
import configureStore from '@/store/Store';

export default function App() {
  const {persistor, store} = configureStore();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // To see all the requests in the chrome Dev tools in the network tab.
  XMLHttpRequest = GLOBAL.originalXMLHttpRequest
    ? GLOBAL.originalXMLHttpRequest
    : GLOBAL.XMLHttpRequest;

  // fetch logger
  global._fetch = fetch;
  global.fetch = function (uri, options, ...args) {
    return global._fetch(uri, options, ...args).then((response: any) => {
      console.log('Fetch', {request: {uri, options, ...args}, response});
      return response;
    });
  };

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider>
            <Navigation />
            <StatusBar />
          </AuthProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
