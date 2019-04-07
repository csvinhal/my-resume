export const types = {
  SHOW_ERROR_MESSAGE: '[Alert] show error message',
  CLOSE_ALERT: '[Alert] close error message',
};

const initialState = {
  variant: null,
  error: null,
  showAlert: false,
};

const errorMessage = (state, action) => ({
  ...state,
  showAlert: true,
  variant: 'error',
  error: action.error,
});

const closeAlert = state => ({
  ...state,
  showAlert: false,
  variant: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_ERROR_MESSAGE:
      return errorMessage(state, action);
    case types.CLOSE_ALERT:
      return closeAlert(state, action);
    default:
      return state;
  }
};

export const actions = {
  showErrorMessage: error => ({ type: types.SHOW_ERROR_MESSAGE, error }),
  closeAlert: () => ({ type: types.CLOSE_ALERT }),
};
