import {combineReducers} from 'redux';
import {SetupStoreReducer} from './reducers/SetupStoreReducer';
import {StoreDetailsReducer} from './reducers/StoreDetailsReducer';
import StoreProfileReducer from './reducers/StoreProfileReducer';
import UserCoordinateReducer from './reducers/UserCoordinateReducer';
import {AddProductReducer} from './reducers/AddProductReducer';
import UIReducer from './reducers/UIReducer';

export const RootReducer = combineReducers({
  setupStore: SetupStoreReducer,
  storeDetails: StoreDetailsReducer,
  coordinates: UserCoordinateReducer,
  storeProfile: StoreProfileReducer,
  addProduct: AddProductReducer,
  ui: UIReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
