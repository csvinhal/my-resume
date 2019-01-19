import { takeEvery } from 'redux-saga/effects';
import { types as authTypes } from '../reducers/auth';
import { signup, signin } from './auth';

export default function* watchAuth() {
  yield takeEvery(authTypes.SIGNUP_REQUEST, signup);
  yield takeEvery(authTypes.SIGNIN_REQUEST, signin);
}
