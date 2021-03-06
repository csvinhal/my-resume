import { takeEvery } from "redux-saga/effects";
import { types as authTypes } from "../reducers/auth";
import { types as resumeTypes } from "../reducers/resume";
import {
  checkAuthTokenValidate,
  checkLocalStorageTokenValidate,
  signIn,
  signUp,
} from "./auth";
import { deleteResumeRequest, fetchAllResumesStart } from "./resume";

export default function* watchAuth() {
  yield takeEvery(authTypes.SIGN_UP_REQUEST, signUp);
  yield takeEvery(authTypes.SIGN_IN_REQUEST, signIn);
  yield takeEvery(authTypes.AUTH_CHECK_TOKEN_VALIDATE, checkAuthTokenValidate);
  yield takeEvery(
    authTypes.AUTH_CHECK_LOCAL_STORAGE_TOKEN,
    checkLocalStorageTokenValidate
  );

  yield takeEvery(resumeTypes.FETCH_ALL_RESUMES_REQUEST, fetchAllResumesStart);
  yield takeEvery(resumeTypes.DELETE_RESUME_REQUEST, deleteResumeRequest);
}
