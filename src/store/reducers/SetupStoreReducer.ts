import {
  CLOSE_WELCOME_MODAL,
  STOREDETAILS_PAGE,
  USER_LOGGED_IN,
  USER_SIGNED_IN,
  ONBOARDING_COMPLETED,
  STORES_EMAIL,
  TOGGLE_WITHDRAWAL_MODAL,
} from '../constant';

export function SetupStoreReducer(
  state = {
    completed: null,
    formPage: 0,
    isWelcomeModalShown: false,
    authMethod: '',
    withdrawalModal: false,
    email: '',
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
    case TOGGLE_WITHDRAWAL_MODAL: {
      return {
        ...state,
        withdrawalModal: !state.withdrawalModal,
      };
    }
    case CLOSE_WELCOME_MODAL: {
      return {
        ...state,
        isWelcomeModalShown: true,
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
    case ONBOARDING_COMPLETED: {
      return {
        ...state,
        completed: payload,
      };
    }
    case STORES_EMAIL: {
      return {
        ...state,
        email: payload,
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
    | 'USER_SIGNED_IN'
    | 'USER_LOGGED_IN'
    | 'ONBOARDING_COMPLETED'
    | 'TOGGLE_WITHDRAWAL_MODAL'
    | 'STORES_EMAIL';
  payload: {
    status: boolean;
    page: number;
  };
};
