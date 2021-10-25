import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import Spinner from 'react-native-loading-spinner-overlay';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';

import Navigation from '@/navigation/index';
import configureStore from '@/store/Store';
import {fcm} from '@/utils/fcmHandler';
import {colors} from './utils';

export default function App() {
  const {persistor, store} = configureStore();

  useEffect(() => {
    fcm.requestUserPermission();
    fcm.getFCMToken();
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
          <PersistGate
            loading={<Spinner visible={true} color={colors.cloudOrange5} />}
            persistor={persistor}
          >
            <Navigation />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
