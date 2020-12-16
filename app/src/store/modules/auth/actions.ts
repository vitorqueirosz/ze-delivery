import { action } from 'typesafe-actions';
import { User } from '../../../interfaces/User';

export function signInRequest({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return action('@auth/SIGN_IN_REQUEST', { email, password });
}

export function signInSuccess({ user, token }: { user: User; token: string }) {
  return action('@auth/SIGN_IN_SUCCESS', { user, token });
}

export function signInFailure() {
  return action('@auth/SIGN_IN_FAILURE');
}
