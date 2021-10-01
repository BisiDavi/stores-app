import axios from 'axios';
import {getAuthtoken} from '../utils/authToken';

const axiosInstance = axios.create({
  baseURL: 'https://cloudmallng.com',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*/*',
    accept: 'application/json',
  },
});

export const axiosImageInstance = axios.create({
  baseURL: 'https://cloudmallng.com',
  headers: {
    'content-type': 'multipart/form-data;application/json',
    accept: 'application/json',
    'Access-Control-Allow-Origin': '*/*',
  },
});

let savedToken: string | null;

getAuthtoken().then(response => {
  savedToken = response;
});

axiosInstance.interceptors.request.use(
  config => {
    if (savedToken) {
      config.headers.Authorization = 'Bearer ' + savedToken;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

axiosImageInstance.interceptors.request.use(
  config => {
    if (savedToken) {
      config.headers.Authorization = 'Bearer ' + savedToken;
    }
    console.log('savedToken', savedToken);
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export const setClientToken = (token: any) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default axiosInstance;
