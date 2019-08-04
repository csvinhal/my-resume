export const types = {
  FETCH_ALL_RESUMES_REQUEST: "[Resume] Fetch all resumes requested",
  FETCH_ALL_RESUMES_SUCCEEDED: "[Resume] Fetch all resumes succeeded",
  FETCH_ALL_RESUMES_FAILED: "[Resume] Fetch all resumes failed",
  DELETE_RESUME_REQUEST: "[Resume] Delete resume requested",
  DELETE_RESUME_SUCCEEDED: "[Resume] Delete resume succeeded",
  DELETE_RESUME_FAILED: "[Resume] Delete resume failed",
};

const initialState = {
  resumes: [],
  error: null,
  resumeRemoveId: null,
};

const fetchAllResumesRequest = state => ({
  ...state,
  error: null,
});

const fetchAllResumesSuccess = (state, action) => ({
  ...state,
  resumes: [...action.resumes],
  error: null,
});

const fetchAllResumesFailed = (state, action) => ({
  ...state,
  error: action.error,
});

const deleteResumeRequest = (state, action) => ({
  ...state,
  error: null,
  resumeRemoveId: action.resumeRemoveId,
});

const deleteResumeSucceed = state => ({
  ...state,
  error: null,
  resumeRemoveId: null,
});

const deleteResumeFailed = (state, action) => ({
  ...state,
  error: action.error,
  resumeRemoveId: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_RESUMES_REQUEST:
      return fetchAllResumesRequest(state);
    case types.FETCH_ALL_RESUMES_SUCCEEDED:
      return fetchAllResumesSuccess(state, action);
    case types.FETCH_ALL_RESUMES_FAILED:
      return fetchAllResumesFailed(state, action);
    case types.DELETE_RESUME_REQUEST:
      return deleteResumeRequest(state, action);
    case types.DELETE_RESUME_SUCCEEDED:
      return deleteResumeSucceed(state);
    case types.DELETE_RESUME_FAILED:
      return deleteResumeFailed(state, action);
    default:
      return state;
  }
};

export const actions = {
  onFetchAllResumesStart: token => ({
    type: types.FETCH_ALL_RESUMES_REQUEST,
    token,
  }),
  onFetchAllResumesSuccess: resumes => ({
    type: types.FETCH_ALL_RESUMES_SUCCEEDED,
    resumes,
  }),
  onFetchAllResumesFailed: error => ({
    type: types.FETCH_ALL_RESUMES_FAILED,
    error,
  }),
  onDeleteResume: (resumeRemoveId, token) => ({
    type: types.DELETE_RESUME_REQUEST,
    resumeRemoveId,
    token,
  }),
  onDeleteResumeSuccess: () => ({ type: types.DELETE_RESUME_SUCCEEDED }),
  onDeleteResumeFailed: error => ({ type: types.DELETE_RESUME_FAILED, error }),
};
