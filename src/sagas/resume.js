import { call, put } from 'redux-saga/effects';
import { actions } from '../reducers/resume';
import { fetchAll } from '../shared/resume';

export function* fetchAllResumesStart(action) {
  try {
    const fetchedOrders = yield call(fetchAll, action.token);
    yield put(actions.onFetchAllResumesSuccess(fetchedOrders));
  } catch (err) {
    yield put(actions.onFetchAllResumesFailed(err.response.data));
  }
}

export default {};
