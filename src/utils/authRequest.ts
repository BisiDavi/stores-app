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
        token = null;
        let message = "email doesn't exist please use a valid email";
        showToast(message);
        return token;
      } else if (error.request) {
        showToast('Opps, Network error');
        token = null;
        return token;
      }
    });
}

export async function loginUser(
  email: string,
  password: string,
): Promise<string | undefined> {
  console.log('email', email, 'password', password);
  let token;
  await axiosInstance
    .post('/api/store/login', {email, password})
    .then(response => {
      showToast(response?.data.message);
      token = response.data.token;
      return token;
    })
    .catch(error => {
      showToast(error.response.data.message);
      console.log('error', error.response.data.message);
      token = null;
      return token;
    });
  return token;
}
