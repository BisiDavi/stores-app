import {combineReducers} from 'redux';
import {SetupStoreReducer} from './reducers/SetupStoreReducer';
import {StoreDetailsReducer} from './reducers/StoreDetailsReducer';
import StoreProfileReducer from './reducers/StoreProfileReducer';
import UserCoordinateReducer from './reducers/UserCoordinateReducer';
import {AddProductReducer} from './reducers/AddProductReducer';

export const RootReducer = combineReducers({
  setupStore: SetupStoreReducer,
  storeDetails: StoreDetailsReducer,
  coordinates: UserCoordinateReducer,
  storeProfile: StoreProfileReducer,
  addProduct: AddProductReducer,
});

export type RootState = ReturnType<typeof RootReducer>;