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
  AuthTokenAction,
  UserLoggedinAction,
  UserOnboardingCompletedAction,
  UserSignedinAction,
} from '@/store/actions/SetupStoreAction';
import {saveToStorage} from '@/utils/authToken';
import StoreProfileActions from '@/store/actions/storeProfileActions';

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
        !loginInToken && dispatch({type: 'STOP_LOADING'});
        dispatchRedux(AuthTokenAction(loginInToken));
        if (loginInToken) {
          saveAuthtoken(loginInToken);
          setClientToken(loginInToken);
        }
        loginInToken && dispatchRedux(UserLoggedinAction());
        let bankStatus: boolean;
        loginInToken &&
          getExistingStoreProfile()
            .then((response: any) => {
              response !== null && dispatchRedux(StoreProfileActions(response));
              bankStatus = response.bank;
              saveToStorage('registrationCompleted', response.bank);
              if (response.bank) {
                showToast(`Welcome, ${response.name}`);
                dispatchRedux(UserOnboardingCompletedAction());
                dispatch({
                  type: 'HAS_ACCOUNT',
                  ownsAccount: response.bank,
                });
              }

              dispatch({
                type: 'SIGN_IN',
                token: loginInToken,
              });
            })
            .catch(() => {
              dispatch({
                type: 'SIGN_IN',
                token: loginInToken,
              });
              dispatch({
                type: 'HAS_ACCOUNT',
                ownsAccount: bankStatus,
              });
            });
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (email: string, password: string) => {
        dispatch({type: 'LOADING'});
        await signupUser(email, password)
          .then(response => {
            console.log('response from signupToken', response);
            setClientToken(response);
            dispatchRedux(UserSignedinAction());
            saveAuthtoken(response);
            dispatch({type: 'SIGN_UP', token: response});
          })
          .catch(error => {
            console.log('error from signupToken', error);
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
