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
import StoreProfileActions from '@/store/actions/storeProfileActions';
import {useQueryClient} from 'react-query';

export default function AuthProvider({children}: PropsWithChildren<{}>) {
  const {state, dispatch} = useAuthReducer();
  const dispatchRedux = useDispatch();
  const [authToken, setAuthToken] = useState<string | null>(null);

  const queryClient = useQueryClient();

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
          showToast('fetching your store ...');
          getExistingStoreProfile(queryClient)
            .then((response: any) => {
              if (response === null) {
                return;
              }
              if (response.bank) {
                dispatchRedux(StoreProfileActions(response));
                showToast(`Welcome, ${response.name}`);
                dispatchRedux(UserOnboardingCompletedAction());
                dispatch({
                  type: 'SIGN_IN',
                  token: loginInToken,
                });
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
          .then(response => {
            setClientToken(response);
            dispatchRedux(UserSignedinAction());
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
    [dispatch, dispatchRedux, queryClient],
  );

  return (
    <AuthContext.Provider value={{authContext, state}}>
      {children}
    </AuthContext.Provider>
  );
}
