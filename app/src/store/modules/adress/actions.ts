import { action } from 'typesafe-actions';
import { User } from '../../../interfaces/User';
import { Adress } from '../../../pages/Map';
import { AdressPayload } from './types';

export function adressRequest() {
  return action('@adress/FETCH_ADRESS_REQUEST');
}

export function adessSuccess({ adress }: { adress: Adress }) {
  return action('@adress/FETCH_ADRESS_SUCCESS', { adress });
}

export function adressFailure() {
  return action('@adress/FETCH_ADRESS_FAILURE');
}
