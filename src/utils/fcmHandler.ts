import messaging from '@react-native-firebase/messaging';
import {saveToStorage} from './authToken';

export const fcm = {
  getFCMToken: async () => {
    const token = await messaging().getToken();

    if (token) {
      saveToStorage('fcm_token', token);
    }
  },
  requestUserPermission: async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  },
};
