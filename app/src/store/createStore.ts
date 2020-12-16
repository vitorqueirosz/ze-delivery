import {
  applyMiddleware,
  createStore,
  Middleware,
  Reducer,
  Store,
} from 'redux';
import { AdressAction, AdressState } from './modules/adress/types';
import { AuthAction, AuthState } from './modules/auth/types';
import { BagAction, BagState } from './modules/bag/types';
import { SignUpAction, SignUpState } from './modules/signUp/types';

export interface StoreState {
  auth: AuthState;
  signUp: SignUpState;
  bag: BagState;
  adress: AdressState;
}

export type StoreAction = AuthAction | SignUpAction | BagAction | AdressAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
): Store => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
