import {
  AUTH_ERROR,
  AUTH_REQUEST,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
} from '../constant';

export const AuthSigninAction =
  (payload: string) =>
  (dispatch: (arg0: {type: 'SIGN_IN'; payload: string}) => void) => {
    dispatch({
      type: SIGN_IN,
      payload,
    });
  };

export const AuthRequestAction =
  () => (dispatch: (arg0: {type: 'AUTH_REQUEST'}) => void) => {
    dispatch({
      type: AUTH_REQUEST,
    });
  };

export const AuthSignupAction =
  (payload: string) =>
  (dispatch: (arg0: {type: 'SIGN_UP'; payload: string}) => void) => {
    dispatch({
      type: SIGN_UP,
      payload,
    });
  };

export const AuthSignoutAction =
  () => (dispatch: (arg0: {type: 'SIGN_OUT'}) => void) => {
    dispatch({
      type: SIGN_OUT,
    });
  };

export const AuthErrorAction =
  () => (dispatch: (arg0: {type: 'AUTH_ERROR'}) => void) => {
    dispatch({
      type: AUTH_ERROR,
    });
  };
