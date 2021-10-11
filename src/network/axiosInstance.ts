import axios from 'axios';
import {CLOUDMALL_BASE_API} from '@/secrets';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = axios.create({
  baseURL: CLOUDMALL_BASE_API,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*/*',
    accept: 'application/json',
  },
});

export const axiosImageInstance = axios.create({
  baseURL: CLOUDMALL_BASE_API,
  headers: {
    'content-type': 'multipart/form-data;application/json',
    accept: 'application/json',
    'Access-Control-Allow-Origin': '*/*',
  },
});

export const setClientToken = (token: any) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  axiosImageInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export function removeToken() {
  axios.defaults.headers.common.Authorization = null;
  axiosInstance.defaults.headers.common.Authorization = null;
  axiosImageInstance.defaults.headers.common.Authorization = null;
  AsyncStorage.setItem('secure_auth_token', '');
}

export default axiosInstance;
