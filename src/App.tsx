import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {Provider} from 'react-redux';
import Navigation from '@/navigation/index';
import AuthProvider from '@/context/AuthProvider';
import configureStore from '@/store/Store';
import {getFCMToken} from '@/utils/fcm';

export default function App() {
  const {persistor, store} = configureStore();

  useEffect(() => {
    getFCMToken();
    SplashScreen.hide();
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: true,
        refetchOnReconnect: false,
      },
    },
  });

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AuthProvider>
              <StatusBar />
              <Navigation />
            </AuthProvider>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
