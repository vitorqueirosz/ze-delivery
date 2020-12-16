import { Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createTransform, persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createStore, { StoreState } from './createStore';
import { rootReducer } from './modules/rootReducer';

import rootSaga from './modules/rootSaga';
import { AuthState } from './modules/auth/types';

// export const TransformCredentials = createTransform(
//   (inboundState: AuthState, key): any => {
//     return {
//       ...inboundState,
//       user: undefined,
//     };
//   },
//   (outboundState: any, key) => {
//     return {
//       ...outboundState,
//       user: sig(outboundState.token),
//     };
//   },
//   {
//     whitelist: ['authentication'],
//   },
// );

const rootConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
  blacklist: ['signUp'],
  // transforms: [TransformCredentials],
};

const persisted = persistReducer<StoreState>(rootConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
