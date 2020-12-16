import { ActionType } from 'typesafe-actions';
import { User } from '../../../interfaces/User';
import * as actions from './actions';

export type SignUpAction = ActionType<typeof actions>;

export interface SignUpPayload {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  age: React.ReactText;
}

export interface SignUpState {
  readonly loadingSignUpRequest: boolean;
  readonly error: boolean;
  readonly user: User | null;
  readonly token: string | null;
}
