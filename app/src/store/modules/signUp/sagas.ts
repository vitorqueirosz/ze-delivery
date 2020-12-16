import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import api from '../../../services/api';

import * as actions from './actions';

export function* signUp({ payload }: ActionType<typeof actions.signUpRequest>) {
  const { email, password, name, phone, cpf, age } = payload;

  try {
    const { data } = yield call(api.post, 'users', {
      email,
      password,
      name,
      phone,
      cpf,
      age,
    });

    const { user, token } = data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    yield put(actions.signUpSuccess({ user, token }));
  } catch (error) {
    yield put(actions.signUpFailure());
  }
}

export default all([takeLatest('@signUp/SIGN_UP_REQUEST', signUp)]);
