import {useDispatch} from 'react-redux';

import {saveAuthtoken, signupUser, loginUser, showToast} from '@/utils/.';
import {setClientToken} from '@/network/axiosInstance';
import useGetExistingStoreProfile from '@/utils/getExistingStoreProfile';
import {
  UserLoggedinAction,
  UserOnboardingCompletedAction,
  UserSignedinAction,
} from '@/store/actions/SetupStoreAction';
import {
  StoreProfileIdActions,
  StoreProfileNameActions,
} from '@/store/actions/storeProfileActions';
import {saveToStorage} from '@/utils/authToken';
import {
  AuthErrorAction,
  AuthRequestAction,
  AuthSigninAction,
  AuthSignoutAction,
  AuthSignupAction,
  stopAuthRequestAction,
} from '@/store/actions/authAction';

export default function useAuth() {
  const dispatch = useDispatch();
  const {getStoreProfile} = useGetExistingStoreProfile();

  async function signIn(email: string, password: string) {
    dispatch(AuthRequestAction());
    const loginInToken: any = await loginUser(email, password);
    console.log('loginInToken', loginInToken);

    if (loginInToken !== null) {
      setClientToken(loginInToken);
      dispatch(UserLoggedinAction());
      dispatch(AuthSigninAction(loginInToken));
      dispatch(AuthRequestAction());
      getStoreProfile()
        .then((response: any) => {
          console.log('response getExistingStoreProfile', response);
          dispatch(stopAuthRequestAction());
          if (response.errorOccured) {
            saveToStorage('onboardingCompleted', false);
            console.log('response.errorOccured', response);
            showToast('complete your onboarding process');
            dispatch(AuthErrorAction());
            dispatch(UserOnboardingCompletedAction(false));
            return;
          }
          console.log('response', response);
          if (response.bank) {
            showToast('fetching your store ...');
            dispatch(StoreProfileIdActions(response.id));
            dispatch(StoreProfileNameActions(response.name));
            showToast(`Welcome, ${response.name}`);
            saveToStorage('onboardingCompleted', true);
            dispatch(UserOnboardingCompletedAction(true));
          }
        })
        .catch(error => {
          console.log('getExistingStoreProfile error', error);
          showToast('complete your onboarding process');
          dispatch(UserOnboardingCompletedAction(false));
          dispatch(AuthErrorAction());
        });
    } else {
      dispatch(stopAuthRequestAction());
    }
  }

  function signOut() {
    return dispatch(AuthSignoutAction());
  }

  async function signUp(email: string, password: string) {
    dispatch(AuthRequestAction());
    await signupUser(email, password)
      .then((response: any) => {
        setClientToken(response);
        console.log('signupUser response', response);
        dispatch(UserSignedinAction());
        saveToStorage('onboardingCompleted', false);
        saveAuthtoken(response);
        dispatch(AuthSignupAction(response));
      })
      .catch(error => {
        console.log('error from signupToken', error);
        dispatch(AuthErrorAction());
        if (error.response) {
          showToast(error.response.data.message);
        } else if (error.request) {
          showToast('Oops, an error occured, unable to sign up');
        }
      });
  }

  return {
    signOut,
    signUp,
    signIn,
  };
}
