import axiosInstance from '@/network/axiosInstance';
import showToast from './showToast';

export async function signupUser(
  email: string,
  password: string,
): Promise<string | undefined> {
  let token;
  return await axiosInstance
    .post('/api/store/register', {email, password})
    .then(response => {
      console.log('response.data', response?.data);
      showToast(response.data.message);
      token = response.data.token;
      return token;
    })
    .catch(error => {
      console.log('response error', error);
      if (error.response) {
        let message = "email doesn't exist please use a valid email";
        showToast(message);
      } else if (error.request) {
        showToast('Opps, Network error');
      }
      return null;
    });
}

export async function loginUser(
  email: string,
  password: string,
): Promise<string | undefined> {
  return await axiosInstance
    .post('/api/store/login', {email, password})
    .then(response => {
      showToast(response.data.message);
      const token = response.data.token;
      return token;
    })
    .catch(error => {
      if (error.response) {
        showToast(error.response.data.message);
      } else if (error.request) {
        showToast('network error');
      }
      return null;
    });
}
