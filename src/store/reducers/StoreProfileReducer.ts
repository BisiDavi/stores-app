import {UPDATE_STORE_PROFILE_NAME, UPDATE_STORE_PROFILE_ID} from '../constant';

export default function StoreProfileReducer(
  state = {
    storeProfile: {
      id: null,
      name: null,
    },
  },
  actions: StoreProfileActionsType,
) {
  const {payload, type} = actions;
  switch (type) {
    case UPDATE_STORE_PROFILE_ID: {
      return {
        ...state,
        storeProfile: {
          ...state.storeProfile,
          id: payload,
        },
      };
    }
    case UPDATE_STORE_PROFILE_NAME: {
      return {
        ...state,
        storeProfile: {
          ...state.storeProfile,
          name: payload,
        },
      };
    }
    default:
      return state;
  }
}

type StoreProfileActionsType = {
  payload: unknown;
  type: 'UPDATE_STORE_PROFILE_NAME' | 'UPDATE_STORE_PROFILE_ID';
};
