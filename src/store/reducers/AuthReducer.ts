import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  AUTH_REQUEST,
  AUTH_ERROR,
} from '../constant';

type actionType =
  | 'SIGN_UP'
  | 'SIGN_IN'
  | 'SIGN_OUT'
  | 'AUTH_REQUEST'
  | 'AUTH_ERROR';
type payloadType = string;
type stateType = {
  token: null | string;
  isAuthorized: boolean;
  loading: boolean;
  error: boolean;
  signOut: boolean;
};

export default function AuthReducer(
  state: stateType = {
    token: null,
    isAuthorized: false,
    loading: false,
    signOut: false,
    error: false,
  },
  action: {type: actionType; payload: payloadType},
) {
  const {type, payload} = action;

  switch (type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP:
      return {
        ...state,
        isAuthorized: true,
        token: payload,
        loading: false,
      };
    case SIGN_IN:
      return {
        ...state,
        token: payload,
        isAuthorized: true,
        loading: false,
      };
    case SIGN_OUT:
      return {
        ...state,
        token: null,
        isAuthorized: false,
        loading: false,
        signOut: true,
      };
    case AUTH_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
}
