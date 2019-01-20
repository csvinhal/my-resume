import { call, put } from 'redux-saga/effects';
import { actions } from '../reducers/auth';
import {
  isValidToken, login, register, removeStorageData,
} from '../shared/auth';
import moment from 'moment';

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

export function* checkAuthTokenValidate(action) {
  const isValid = yield call(isValidToken, action.expirationDate);
  if (!isValid) {
    yield call(removeStorageData);
    yield put(actions.signout());
  }
}

export function* checkLocalStorageTokenValidate() {
  const token = yield localStorage.getItem('token');
  if (!token) {
    yield call(removeStorageData);
    yield put(actions.signout());
  } else {
    const userId = yield localStorage.getItem('userId');
    const expirationDate = yield moment(new Date(localStorage.getItem('expirationDate')));
    yield put(actions.signInSuccess(token, userId, expirationDate));
  }
}
