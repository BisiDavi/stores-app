import {
  AUTH_TOKEN,
  CLOSE_WELCOME_MODAL,
  STOREDETAILS_PAGE,
  USER_LOGGED_IN,
  USER_SIGNED_IN,
} from '../constant';

export function SetupStoreReducer(
  state = {
    completed: false,
    formPage: 0,
    isWelcomeModalShown: false,
    token: null,
    authMethod: '',
  },
  action: actionType,
) {
  const {payload, type} = action;
  switch (type) {
    case STOREDETAILS_PAGE: {
      return {
        ...state,
        completed: payload.status,
        formPage: payload.page,
      };
    }
    case CLOSE_WELCOME_MODAL: {
      return {
        ...state,
        isWelcomeModalShown: true,
      };
    }
    case AUTH_TOKEN: {
      return {
        ...state,
        token: payload.token,
      };
    }
    case USER_SIGNED_IN: {
      return {
        ...state,
        authMethod: 'SIGNIN',
      };
    }
    case USER_LOGGED_IN: {
      return {
        ...state,
        authMethod: 'LOGIN',
      };
    }
    default:
      return state;
  }
}

type actionType = {
  type:
    | 'STOREDETAILS_PAGE'
    | 'CLOSE_WELCOME_MODAL'
    | 'AUTH_TOKEN'
    | 'USER_SIGNED_IN'
    | 'USER_LOGGED_IN';
  payload: {
    status: boolean;
    page: number;
    token: string;
  };
};
