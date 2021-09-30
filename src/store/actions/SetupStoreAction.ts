import {
  AUTH_TOKEN,
  CLOSE_WELCOME_MODAL,
  STOREDETAILS_PAGE,
  USER_LOGGED_IN,
  USER_SIGNED_IN,
} from '../constant';

export const SetupStoreScreenAction =
  (page: number, status: boolean) => (dispatch: (arg0: argType) => void) => {
    dispatch({
      type: STOREDETAILS_PAGE,
      payload: {
        page,
        status,
      },
    });
  };

export const CloseWelcomeModalAction =
  () => (dispatch: (arg0: {type: string}) => void) => {
    dispatch({
      type: CLOSE_WELCOME_MODAL,
    });
  };

export const AuthTokenAction =
  (token: string) => (dispatch: (arg0: authArgType) => void) => {
    dispatch({
      type: AUTH_TOKEN,
      payload: {
        token,
      },
    });
  };

export const UserLoggedinAction =
  () => (dispatch: (arg0: {type: 'USER_LOGGED_IN'}) => void) => {
    dispatch({
      type: USER_LOGGED_IN,
    });
  };

export const UserSignedinAction =
  () => (dispatch: (arg0: {type: 'USER_SIGNED_IN'}) => void) => {
    dispatch({
      type: USER_SIGNED_IN,
    });
  };

export type setupStorePayloadType = {
  page: number;
  status: boolean;
};

export type setupStoreTypePayloadType = {
  storeType: string;
};

type argType = {
  type: string;
  payload: setupStorePayloadType;
};

export type authTokenPayloadType = {
  token: string;
};

type authArgType = {
  type: string;
  payload: authTokenPayloadType;
};
