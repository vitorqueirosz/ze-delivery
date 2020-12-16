import { Adress } from '../../../pages/Map';
import { AdressAction, AdressState } from './types';

const INITIAL_STATE: AdressState = {
  error: false,
  loadingAdressRequest: false,
  adress: {} as Adress,
};

export default function reducer(
  state = INITIAL_STATE,
  action: AdressAction,
): AdressState {
  switch (action.type) {
    case '@adress/FETCH_ADRESS_REQUEST':
      return {
        ...state,
        loadingAdressRequest: true,
      };
    case '@adress/FETCH_ADRESS_SUCCESS':
      return {
        ...state,
        loadingAdressRequest: false,
        adress: action.payload.adress,
      };
    case '@adress/FETCH_ADRESS_FAILURE':
      return {
        ...state,
        loadingAdressRequest: false,
        error: true,
      };
    default:
      return state;
  }
}
