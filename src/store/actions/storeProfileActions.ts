import {
  UPDATE_STORE_PROFILE_ID,
  UPDATE_STORE_PROFILE_NAME,
} from '@/store/constant';

export const StoreProfileIdActions =
  (payload: string) =>
  (
    dispatch: (arg0: {
      type: 'UPDATE_STORE_PROFILE_ID';
      payload: string;
    }) => void,
  ) => {
    dispatch({
      type: UPDATE_STORE_PROFILE_ID,
      payload,
    });
  };

export const StoreProfileNameActions =
  (payload: string) =>
  (
    dispatch: (arg0: {
      type: 'UPDATE_STORE_PROFILE_NAME';
      payload: string;
    }) => void,
  ) => {
    dispatch({
      type: UPDATE_STORE_PROFILE_NAME,
      payload,
    });
  };
