import {
  CLOSE_WELCOME_MODAL,
  STOREDETAILS_PAGE,
  USER_LOGGED_IN,
  USER_SIGNED_IN,
  ONBOARDING_COMPLETED,
  STORES_EMAIL,
  TOGGLE_WITHDRAWAL_MODAL,
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

export const ToggleWithdrawalModalAction =
  () => (dispatch: (arg0: {type: string}) => void) => {
    dispatch({
      type: TOGGLE_WITHDRAWAL_MODAL,
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

export const UserOnboardingCompletedAction =
  () => (dispatch: (arg0: {type: 'ONBOARDING_COMPLETED'}) => void) => {
    dispatch({
      type: ONBOARDING_COMPLETED,
    });
  };
export const persistStoresEmail =
  (payload: string) =>
  (dispatch: (arg0: {type: 'STORES_EMAIL'; payload: string}) => void) => {
    dispatch({
      type: STORES_EMAIL,
      payload,
    });
  };

//

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
