import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

import {RootReducer} from './RootReducer';

const middleware = [thunk];

const config = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 0,
};

const reducer = persistReducer(config, RootReducer);

export default function configureStore() {
  const store: any = createStore(reducer, applyMiddleware(...middleware));
  const persistor = persistStore(store);
  let hotModuleReplacement: any = module;

  if (hotModuleReplacement.hot) {
    hotModuleReplacement.hot.accept('./RootReducer', () => {
      // This fetch the new state of the above reducers.
      const nextRootReducer = require('./RootReducer').default;
      store.replaceReducer(persistReducer(config, nextRootReducer));
    });
  }

  return {persistor, store};
}
