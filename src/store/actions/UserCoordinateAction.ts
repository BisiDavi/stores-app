import {GET_USER_COORDINATES} from '../constant';

type payloadType = {
  latitude: number;
  longitude: number;
};

type dispatchType = {
  type: string;
  payload: payloadType;
};

export const GetUserCoordinateAction =
  (payload: payloadType) => (dispatch: (dispatch: dispatchType) => void) => {
    console.log('payload', payload);
    dispatch({
      type: GET_USER_COORDINATES,
      payload: {
        latitude: payload.latitude,
        longitude: payload.longitude,
      },
    });
  };
