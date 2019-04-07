export const types = {
  SHOW_LOADER: '[Loading State] Show loader',
  CLOSE_LOADER: '[Loading State] Close loader',
};

const initialState = {
  showLoader: false,
};

const showLoader = state => ({
  ...state,
  showLoader: true,
});

const closeLoader = state => ({
  ...state,
  showLoader: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_LOADER:
      return showLoader(state);
    case types.CLOSE_LOADER:
      return closeLoader(state);
    default:
      return state;
  }
};

export const actions = {
  showLoader: () => ({ type: types.SHOW_LOADER }),
  closeLoader: () => ({ type: types.CLOSE_LOADER }),
};
