import { ActionType } from 'typesafe-actions';
import { User } from '../../../interfaces/User';
import * as actions from './actions';

export type AuthAction = ActionType<typeof actions>;

export interface AuthState {
  readonly loadingSignInRequest: boolean;
  readonly isSignedIn: boolean;
  readonly error: boolean;
  readonly user: User | null;
  readonly token: string | null;
}
