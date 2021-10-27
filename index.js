import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import * as Sentry from '@sentry/react-native';
import App from './src/App';
import {name as appName} from './app.json';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);

Sentry.init({
  dsn: 'https://f365ae1a61754d97a169a53d7a9b948c@o1048174.ingest.sentry.io/6030691',
});
