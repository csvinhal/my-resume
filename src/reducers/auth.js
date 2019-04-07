export const types = {
  AUTH_CHECK_LOCAL_STORAGE_TOKEN: 'AUTH_CHECK_LOCAL_STORAGE_TOKEN',
  SIGNIN_REQUEST: '[Auth] Sign in requested',
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNIN_FAILED: '[Auth] Sign in failed',
  SIGNUP_FAILED: 'SIGNUP_FAILED',
  AUTH_CHECK_TOKEN_VALIDATE: 'AUTH_CHECK_TOKEN_VALIDATE',
  SIGNOUT: 'SIGNOUT',
};

const initialState = {
  token: null,
  userId: null,
  expirationDate: null,
  shouldRedirect: false,
};

const requestStarted = state => ({
  ...state, shouldRedirect: false,
});

const requestSucceeded = (state, action) => (
  {
    ...state,
    token: action.token,
    userId: action.userId,
    expirationDate: action.expirationDate,
    shouldRedirect: false,
  }
);

const requestFailed = state => (
  { ...state }
);

const signout = state => ({
  ...state, token: null, userId: null, expirationDate: null, shouldRedirect: true,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN_REQUEST:
    case types.SIGNUP_REQUEST:
      return requestStarted(state, action);
    case types.SIGNIN_SUCCESS:
    case types.SIGNUP_SUCCESS:
      return requestSucceeded(state, action);
    case types.SIGNIN_FAILED:
    case types.SIGNUP_FAILED:
      return requestFailed(state, action);
    case types.SIGNOUT:
      return signout(state);
    default:
      return state;
  }
};

export const actions = {
  signup: (email, password) => ({ type: types.SIGNUP_REQUEST, email, password }),
  login: (email, password) => ({ type: types.SIGNIN_REQUEST, email, password }),
  signUpSuccess: (token, userId, expirationDate) => ({
    type: types.SIGNUP_SUCCESS, token, userId, expirationDate,
  }),
  signInSuccess: (token, userId, expirationDate) => ({
    type: types.SIGNIN_SUCCESS, token, userId, expirationDate,
  }),
  signUpFailed: () => ({
    type: types.SIGNUP_FAILED,
  }),
  signInFailed: () => ({
    type: types.SIGNIN_FAILED,
  }),
  checkAuthTokenValidate: expirationDate => ({
    type: types.AUTH_CHECK_TOKEN_VALIDATE,
    expirationDate,
  }),
  checkLocalStorageTokenValidate: () => ({ type: types.AUTH_CHECK_LOCAL_STORAGE_TOKEN }),
  signout: () => ({ type: types.SIGNOUT }),
};
