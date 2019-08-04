export const types = {
  AUTH_CHECK_LOCAL_STORAGE_TOKEN: "AUTH_CHECK_LOCAL_STORAGE_TOKEN",
  SIGN_IN_REQUEST: "[Auth] Sign in requested",
  SIGN_UP_REQUEST: "[Auth] Sign up requested",
  SIGN_IN_SUCCEEDED: "[Auth] Sign in succeeded",
  SIGN_UP_SUCCEEDED: "[Auth] Sign up succeeded",
  SIGN_IN_FAILED: "[Auth] Sign in failed",
  SIGN_UP_FAILED: "[Auth] Sign up failed",
  AUTH_CHECK_TOKEN_VALIDATE: "[Auth] check token validate",
  SIGN_OUT: "[Auth] Sign out",
};

const initialState = {
  token: null,
  userId: null,
  expirationDate: null,
  shouldRedirect: false,
};

const requestStarted = state => ({
  ...state,
  shouldRedirect: false,
});

const requestSucceeded = (state, action) => ({
  ...state,
  token: action.token,
  userId: action.userId,
  expirationDate: action.expirationDate,
  shouldRedirect: false,
});

const requestFailed = state => ({ ...state });

const signOut = state => ({
  ...state,
  token: null,
  userId: null,
  expirationDate: null,
  shouldRedirect: true,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_REQUEST:
    case types.SIGN_UP_REQUEST:
      return requestStarted(state, action);
    case types.SIGN_IN_SUCCEEDED:
    case types.SIGN_UP_SUCCEEDED:
      return requestSucceeded(state, action);
    case types.SIGN_IN_FAILED:
    case types.SIGN_UP_FAILED:
      return requestFailed(state, action);
    case types.SIGN_OUT:
      return signOut(state);
    default:
      return state;
  }
};

export const actions = {
  signUp: (email, password) => ({
    type: types.SIGN_UP_REQUEST,
    email,
    password,
  }),
  login: (email, password) => ({
    type: types.SIGN_IN_REQUEST,
    email,
    password,
  }),
  signUpSuccess: ({ token, userId, expirationDate }) => ({
    type: types.SIGN_UP_SUCCEEDED,
    token,
    userId,
    expirationDate,
  }),
  signInSuccess: ({ token, userId, expirationDate }) => ({
    type: types.SIGN_IN_SUCCEEDED,
    token,
    userId,
    expirationDate,
  }),
  signUpFailed: () => ({
    type: types.SIGN_UP_FAILED,
  }),
  signInFailed: () => ({
    type: types.SIGN_IN_FAILED,
  }),
  checkAuthTokenValidate: expirationDate => ({
    type: types.AUTH_CHECK_TOKEN_VALIDATE,
    expirationDate,
  }),
  checkLocalStorageTokenValidate: () => ({
    type: types.AUTH_CHECK_LOCAL_STORAGE_TOKEN,
  }),
  signOut: () => ({ type: types.SIGN_OUT }),
};
