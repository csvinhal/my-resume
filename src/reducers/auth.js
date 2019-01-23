export const types = {
  AUTH_CHECK_LOCAL_STORAGE_TOKEN: 'AUTH_CHECK_LOCAL_STORAGE_TOKEN',
  SIGNIN_REQUEST: 'SIGNIN_REQUEST',
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNIN_FAILED: 'SIGNIN_FAILED',
  SIGNUP_FAILED: 'SIGNUP_FAILED',
  AUTH_CHECK_TOKEN_VALIDATE: 'AUTH_CHECK_TOKEN_VALIDATE',
  SIGNOUT: 'SIGNOUT',
  CLOSE_ALERT: 'CLOSE_ALERT',
};

const initialState = {
  token: null,
  userId: null,
  expirationDate: null,
  isLoading: false,
  shouldRedirect: false,
  error: null,
};

const requestStarted = state => ({
  ...state, isLoading: true, error: null, shouldRedirect: false,
});

const requestSucceeded = (state, action) => (
  {
    ...state,
    token: action.token,
    userId: action.userId,
    expirationDate: action.expirationDate,
    isLoading: false,
    shouldRedirect: false,
  }
);

const requestFailed = (state, action) => (
  { ...state, isLoading: false, error: action.error }
);

const closeAlert = state => ({ ...state, error: null });

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
    case types.CLOSE_ALERT:
      return closeAlert(state, action);
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
  signUpFailed: error => ({
    type: types.SIGNUP_FAILED, error,
  }),
  signInFailed: error => ({
    type: types.SIGNIN_FAILED, error,
  }),
  checkAuthTokenValidate: expirationDate => ({
    type: types.AUTH_CHECK_TOKEN_VALIDATE,
    expirationDate,
  }),
  checkLocalStorageTokenValidate: () => ({ type: types.AUTH_CHECK_LOCAL_STORAGE_TOKEN }),
  signout: () => ({ type: types.SIGNOUT }),
  closeAlert: () => ({ type: types.CLOSE_ALERT }),
};
