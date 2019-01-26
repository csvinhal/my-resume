import { call, put } from 'redux-saga/effects';
import { actions } from '../reducers/resume';
import { fetchAll, deleteResume } from '../shared/resume';

export function* fetchAllResumesStart(action) {
  try {
    const fetchedOrders = yield call(fetchAll, action.token);
    yield put(actions.onFetchAllResumesSuccess(fetchedOrders));
  } catch (err) {
    yield put(actions.onFetchAllResumesFailed(err.response.data));
  }
}

export function* deleteResumeRequest(action) {
  try {
    yield call(deleteResume, action.token, action.resumeRemoveId);
    yield put(actions.onDeleteResumeSuccess());
    yield put(actions.onFetchAllResumesStart(action.token));
  } catch (err) {
    yield put(actions.onDeleteResumeFailed(err.response.data));
  }
}

export default {};
