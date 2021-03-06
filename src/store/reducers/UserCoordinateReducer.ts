import {GET_USER_COORDINATES} from '../constant';

type actionType = {
  payload: {
    latitude: number;
    longitude: number;
  };
  type: 'GET_USER_COORDINATES';
};

type stateType = {
  latitude: number;
  longitude: number;
};

export default function UserCoordinateReducer(
  state: stateType = {
    latitude: 0,
    longitude: 0,
  },
  action: actionType,
) {
  console.log('coOrdinateState', state);
  const {type, payload} = action;
  switch (type) {
    case GET_USER_COORDINATES: {
      return {
        ...state,
        latitude: payload.latitude,
        longitude: payload.longitude,
      };
    }
    default:
      return state;
  }
}
