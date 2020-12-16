import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import api from '../../../services/api';

import * as actions from './actions';

export function* fetchAdress() {
  try {
    const { data } = yield call(api.get, 'users/adress');

    const { adress } = data;

    yield put(actions.adessSuccess({ adress }));
  } catch (error) {
    yield put(actions.adressFailure());
  }
}

export default all([takeLatest('@adress/FETCH_ADRESS_REQUEST', fetchAdress)]);
