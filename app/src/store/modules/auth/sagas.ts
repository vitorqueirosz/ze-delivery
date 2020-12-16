import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import api from '../../../services/api';

import * as actions from './actions';

export function* signIn({ payload }: ActionType<typeof actions.signInRequest>) {
  const { email, password } = payload;

  try {
    const { data } = yield call(api.post, 'sessions', { email, password });

    const { user, token } = data;

    yield put(actions.signInSuccess({ user, token }));

    api.defaults.headers.authorization = `Bearer ${token}`;
  } catch (error) {
    yield put(actions.signInFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
