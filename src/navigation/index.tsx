import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';

import LoadingActivityIndicator from '@/components/Loader/LoadingActivityIndicator';
import RootNavigator from './RootNavigator';

export default function Navigation() {
  //const navigation: any = useNavigation();
  const [loading, setLoading] = useState(true);
  //const [initialRoute, setInitialRoute] = useState('OrderScreen');

  useEffect(() => {
    messaging().onMessage(async remoteMessage => {
      console.log(
        'A new FCM message just arrived!',
        JSON.stringify(remoteMessage),
      );
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      JSON.stringify(remoteMessage);
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          //setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer fallback={<LoadingActivityIndicator />}>
      <RootNavigator />
    </NavigationContainer>
  );
}
