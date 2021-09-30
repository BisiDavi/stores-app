import {UPDATE_STORE_PROFILE} from '../constant';

const StoreProfileActions =
  (payload: unknown) =>
  (
    dispatch: (arg0: {type: 'UPDATE_STORE_PROFILE'; payload: unknown}) => void,
  ) => {
    dispatch({
      type: UPDATE_STORE_PROFILE,
      payload,
    });
  };

export default StoreProfileActions;
