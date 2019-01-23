export const types = {
  FETCH_ALL_RESUMES_REQUEST: 'FETCH_ALL_RESUMES_REQUEST',
  FETCH_ALL_RESUMES_SUCCESS: 'FETCH_ALL_RESUMES_SUCCESS',
  FETCH_ALL_RESUMES_FAILED: 'FETCH_ALL_RESUMES_FAILED',
  CLOSE_ALERT: 'CLOSE_ALERT',
};

const initialState = {
  resumes: [],
  error: null,
  isLoading: false,
  showAlert: false,
};

const fetchAllResumesRequest = state => ({
  ...state,
  isLoading: true,
  error: null,
});

const fetchAllResumesSuccess = (state, action) => ({
  ...state,
  resumes: [...action.resumes],
  isLoading: false,
  error: null,
});

const fetchAllResumesFailed = (state, action) => ({
  ...state,
  isLoading: false,
  error: action.error,
  showAlert: true,
});

const closeAlert = state => ({ ...state, showAlert: false });

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_RESUMES_REQUEST:
      return fetchAllResumesRequest(state);
    case types.FETCH_ALL_RESUMES_SUCCESS:
      return fetchAllResumesSuccess(state, action);
    case types.FETCH_ALL_RESUMES_FAILED:
      return fetchAllResumesFailed(state, action);
    case types.CLOSE_ALERT:
      return closeAlert(state, action);
    default:
      return state;
  }
};

export const actions = {
  onFetchAllResumesStart: token => ({ type: types.FETCH_ALL_RESUMES_REQUEST, token }),
  onFetchAllResumesSuccess: resumes => ({ type: types.FETCH_ALL_RESUMES_SUCCESS, resumes }),
  onFetchAllResumesFailed: error => ({ type: types.FETCH_ALL_RESUMES_FAILED, error }),
  closeAlert: () => ({ type: types.CLOSE_ALERT }),
};
