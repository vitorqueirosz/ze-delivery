import { ActionType } from 'typesafe-actions';

import { Adress } from '../../../pages/Map';
import * as actions from './actions';

export type AdressAction = ActionType<typeof actions>;

export interface AdressPayload {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface AdressState {
  readonly loadingAdressRequest: boolean;
  readonly error: boolean;
  readonly adress: Adress | null;
}
