import AsyncStorage from '@react-native-async-storage/async-storage';
import hasTokenExpired from './hasTokenExpired';

export async function saveAuthtoken(token: any) {
  if (token === null || undefined) {
    return;
  }
  const checkTokenExpiry = hasTokenExpired(token);
  if (!checkTokenExpiry) {
    await AsyncStorage.setItem('secure_auth_token', token);
  }
}

export async function getAuthtoken() {
  try {
    const authToken = await AsyncStorage.getItem('secure_auth_token');
    return authToken;
  } catch (e) {
    console.log('error', e);
    return null;
  }
}
