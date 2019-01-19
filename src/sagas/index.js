import { takeEvery } from 'redux-saga/effects';
import { types as authTypes } from '../reducers/auth';
import { signup } from './auth';

export function* watchAuth() {
    yield takeEvery(authTypes.SIGNUP_REQUEST, signup);
}