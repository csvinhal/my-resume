export const types = {
  FETCH_ALL_RESUMES_REQUEST: 'FETCH_ALL_RESUMES_REQUEST',
  FETCH_ALL_RESUMES_SUCCESS: 'FETCH_ALL_RESUMES_SUCCESS',
  FETCH_ALL_RESUMES_FAILED: 'FETCH_ALL_RESUMES_FAILED',
  DELETE_RESUME_RESQUEST: 'DELETE_RESUME_RESQUEST',
  DELETE_RESUME_SUCCESS: 'DELETE_RESUME_SUCCESS',
  DELETE_RESUME_FAILED: 'DELETE_RESUME_FAILED',
  CLOSE_ALERT: 'CLOSE_ALERT',
};

const initialState = {
  resumes: [],
  error: null,
  isLoading: false,
  showAlert: false,
  resumeRemoveId: null,
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

const deleteResumeRequest = (state, action) => ({
  ...state,
  isLoading: true,
  error: null,
  resumeRemoveId: action.resumeRemoveId,
});

const deleteResumeSucceed = state => ({
  ...state,
  isLoading: false,
  error: null,
  resumeRemoveId: null,
});

const delectResumeFailed = (state, action) => ({
  ...state,
  isLoading: false,
  error: action.error,
  resumeRemoveId: null,
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
    case types.DELETE_RESUME_RESQUEST:
      return deleteResumeRequest(state, action);
    case types.DELETE_RESUME_SUCCESS:
      return deleteResumeSucceed(state);
    case types.DELETE_RESUME_FAILED:
      return delectResumeFailed(state, action);
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
  onDeleteResume: (resumeRemoveId, token) => ({
    type: types.DELETE_RESUME_RESQUEST,
    resumeRemoveId,
    token,
  }),
  onDeleteResumeSuccess: () => ({ type: types.DELETE_RESUME_SUCCESS }),
  onDeleteResumeFailed: error => ({ type: types.DELETE_RESUME_FAILED, error }),
  closeAlert: () => ({ type: types.CLOSE_ALERT }),
};
