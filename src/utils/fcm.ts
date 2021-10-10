import messaging from '@react-native-firebase/messaging';
import {saveToStorage} from './authToken';

export async function getFCMToken() {
  const token = await messaging().getToken();

  if (token) {
    console.log('token fcm', token);
  }

  saveToStorage('fcm_token', token);
}
