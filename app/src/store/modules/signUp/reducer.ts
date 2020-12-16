import { SignUpAction, SignUpState } from './types';

const INITIAL_STATE: SignUpState = {
  error: false,
  loadingSignUpRequest: false,
  token: null,
  user: null,
};

export default function reducer(
  state = INITIAL_STATE,
  action: SignUpAction,
): SignUpState {
  switch (action.type) {
    case '@signUp/SIGN_UP_REQUEST':
      return {
        ...state,
        loadingSignUpRequest: true,
      };
    case '@signUp/SIGN_UP_SUCCESS':
      return {
        ...state,
        loadingSignUpRequest: false,
        token: action.payload.token,
        user: action.payload.user,
      };
    case '@signUp/SIGN_UP_FAILURE':
      return {
        ...state,
        loadingSignUpRequest: false,
        error: true,
      };
    default:
      return state;
  }
}
