import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import {RootReducer} from './RootReducer';

const middleware = [thunk];

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = persistReducer(config, RootReducer);

export default function configureStore() {
  const store: any = createStore(reducer, applyMiddleware(...middleware));
  const persistor = persistStore(store);

  return {persistor, store};
}
