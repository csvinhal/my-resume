import { takeEvery } from 'redux-saga/effects';
import { types as authTypes } from '../reducers/auth';
import { types as resumeTypes } from '../reducers/resume';
import {
  signup, signin, checkAuthTokenValidate, checkLocalStorageTokenValidate,
} from './auth';
import { fetchAllResumesStart } from './resume';

export default function* watchAuth() {
  yield takeEvery(authTypes.SIGNUP_REQUEST, signup);
  yield takeEvery(authTypes.SIGNIN_REQUEST, signin);
  yield takeEvery(authTypes.AUTH_CHECK_TOKEN_VALIDATE, checkAuthTokenValidate);
  yield takeEvery(authTypes.AUTH_CHECK_LOCAL_STORAGE_TOKEN, checkLocalStorageTokenValidate);

  yield takeEvery(resumeTypes.FETCH_ALL_RESUMES_REQUEST, fetchAllResumesStart);
}
