import React, {PropsWithChildren, useState, useMemo, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import useAuthReducer from '@/hooks/useAuthReducer';
import AuthContext from './AuthContext';
import {
  getAuthtoken,
  saveAuthtoken,
  signupUser,
  loginUser,
  showToast,
} from '@/utils/.';
import {setClientToken} from '@/network/axiosInstance';
import getExistingStoreProfile from '@/utils/getExistingStoreProfile';
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

export default function AuthProvider({children}: PropsWithChildren<{}>) {
  const {state, dispatch} = useAuthReducer();
  const dispatchRedux = useDispatch();
  const [authToken, setAuthToken] = useState<string | null>(null);

  async function storedToken() {
    const token = await getAuthtoken();
    setAuthToken(token);
  }

  useEffect(() => {
    storedToken();
    if (authToken !== null) {
      dispatch({type: 'APP_LOAD', token: authToken});
    }
  }, [authToken, dispatch]);

  const authContext = useMemo(
    () => ({
      loginIn: async (email: string, password: string) => {
        dispatch({type: 'LOADING'});
        const loginInToken: any = await loginUser(email, password);
        if (loginInToken !== null) {
          saveAuthtoken(loginInToken);
          setClientToken(loginInToken);
          dispatchRedux(UserLoggedinAction());
          dispatch({type: 'LOADING'});
          getExistingStoreProfile()
            .then((response: any) => {
              if (response === null) {
                saveToStorage('onboardingCompleted', false);
                return;
              }
              console.log('response', response);
              if (response.bank) {
                showToast('fetching your store ...');
                dispatchRedux(StoreProfileIdActions(response.id));
                dispatchRedux(StoreProfileNameActions(response.name));
                showToast(`Welcome, ${response.name}`);
                saveToStorage('onboardingCompleted', true);
                dispatchRedux(UserOnboardingCompletedAction());
                dispatch({
                  type: 'SIGN_IN',
                  token: loginInToken,
                });
              } else {
                saveToStorage('onboardingCompleted', false);
              }
            })
            .catch(() => {
              showToast('complete your onboarding process');
            });
        }
        dispatch({type: 'STOP_LOADING'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (email: string, password: string) => {
        dispatch({type: 'LOADING'});
        await signupUser(email, password)
          .then((response: any) => {
            setClientToken(response);
            dispatchRedux(UserSignedinAction());
            saveToStorage('onboardingCompleted', false);
            saveAuthtoken(response);
            dispatch({type: 'SIGN_UP', token: response});
          })
          .catch(error => {
            console.log('error from signupToken', error);
            if (error.response) {
              showToast(error.response.data.message);
            } else if (error.request) {
              showToast('Oops, an error occured, unable to sign up');
            }
            dispatch({type: 'STOP_LOADING'});
          });
      },
    }),
    [dispatch, dispatchRedux],
  );

  return (
    <AuthContext.Provider value={{authContext, state}}>
      {children}
    </AuthContext.Provider>
  );
}
