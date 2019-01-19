import { call, put } from 'redux-saga/effects';
import { actions } from '../reducers/auth';
import { register, login } from '../shared/auth';

export function* signup(action) {
  try {
    const response = yield call(register, action.email, action.password);
    yield put(actions.signUpSuccess(response.idToken, response.localId, response.expirationDate));
  } catch (err) {
    yield put(actions.signUpFailed(err.response.data.error));
  }
}

export function* signin(action) {
  try {
    const response = yield call(login, action.email, action.password);
    yield put(actions.signInSuccess(response.idToken, response.localId, response.expirationDate));
  } catch (err) {
    yield put(actions.signInFailed(err.response.data.error));
  }

}