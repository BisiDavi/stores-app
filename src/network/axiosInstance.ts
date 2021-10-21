import axios from 'axios';
import {CLOUDMALL_BASE_API} from '@/secrets';

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

export function setClientToken(token: any) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  axiosImageInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  console.log(
    'axios.defaults.headers.common.Authorization',
    axios.defaults.headers.common.Authorization,
  );
}

export function removeToken() {
  axios.defaults.headers.common.Authorization = null;
  axiosInstance.defaults.headers.common.Authorization = null;
  axiosImageInstance.defaults.headers.common.Authorization = null;
}

export default axiosInstance;
