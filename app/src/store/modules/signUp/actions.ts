import { action } from 'typesafe-actions';
import { User } from '../../../interfaces/User';
import { SignUpPayload } from './types';

export function signUpRequest({
  email,
  password,
  name,
  phone,
  cpf,
  age,
}: SignUpPayload) {
  return action('@signUp/SIGN_UP_REQUEST', {
    email,
    password,
    name,
    phone,
    cpf,
    age,
  });
}

export function signUpSuccess({ user, token }: { user: User; token: string }) {
  return action('@signUp/SIGN_UP_SUCCESS', { user, token });
}

export function signUpFailure() {
  return action('@signUp/SIGN_UP_FAILURE');
}
