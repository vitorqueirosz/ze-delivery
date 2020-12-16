import { combineReducers } from 'redux';
import auth from './auth/reducer';
import signUp from './signUp/reducer';
import bag from './bag/reducer';
import adress from './adress/reducer';

const rootReducer = combineReducers({
  auth,
  signUp,
  bag,
  adress,
});

export { rootReducer };
