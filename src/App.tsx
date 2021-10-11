import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, Alert} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import messaging from '@react-native-firebase/messaging';

import Navigation from '@/navigation/index';
import AuthProvider from '@/context/AuthProvider';
import configureStore from '@/store/Store';
import {fcm} from '@/utils/fcmHandler';

export default function App() {
  const {persistor, store} = configureStore();

  useEffect(() => {
    fcm.requestUserPermission();
    fcm.getFCMToken();
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        'A new FCM message just arrived!',
        JSON.stringify(remoteMessage),
      );
    });
    return unsubscribe;
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: true,
        refetchOnReconnect: false,
      },
    },
  });

  if (__DEV__) {
    import('react-query-native-devtools').then(({addPlugin}) => {
      addPlugin({queryClient});
    });
  }

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
