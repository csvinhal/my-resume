import moment from "moment";
import { call, put } from "redux-saga/effects";
import { actions as actionsAlert } from "../reducers/alert";
import { actions as actionsAuth } from "../reducers/auth";
import { actions as actionsLoadingState } from "../reducers/loadingState";
import {
  isValidToken,
  login,
  register,
  removeStorageData,
} from "../shared/auth";

export function* signUp(action) {
  const { showLoader, closeLoader } = actionsLoadingState;
  try {
    const { signUpSuccess } = actionsAuth;
    const { email, password } = action;
    yield put(showLoader());
    const response = yield call(register, { email, password });
    const { idToken, localId, expirationDate } = response;
    yield put(
      signUpSuccess({ token: idToken, userId: localId, expirationDate })
    );
  } catch (err) {
    const { showErrorMessage } = actionsAlert;
    const { signUpFailed } = actionsAuth;
    yield put(showErrorMessage(err.response.data.error.message));
    yield put(signUpFailed());
  }

  yield put(closeLoader());
}

export function* signIn(action) {
  const { showLoader, closeLoader } = actionsLoadingState;
  try {
    const { signInSuccess } = actionsAuth;
    yield put(showLoader());
    const response = yield call(login, action.email, action.password);
    const { idToken, localId, expirationDate } = response;
    yield put(
      signInSuccess({
        token: idToken,
        userId: localId,
        expirationDate,
      })
    );
  } catch (err) {
    const { signInFailed } = actionsAuth;
    const { showErrorMessage } = actionsAlert;
    yield put(showErrorMessage(err.response.data.error.message));
    yield put(signInFailed());
  }

  yield put(closeLoader());
}

export function* checkAuthTokenValidate(action) {
  const isValid = yield call(isValidToken, action.expirationDate);
  if (!isValid) {
    yield call(removeStorageData);
    yield put(actionsAuth.signOut());
  }
}

export function* checkLocalStorageTokenValidate() {
  const token = yield localStorage.getItem("token");
  if (!token) {
    yield call(removeStorageData);
    yield put(actionsAuth.signOut());
  } else {
    const userId = yield localStorage.getItem("userId");
    const expirationDate = yield moment(
      new Date(localStorage.getItem("expirationDate"))
    );
    yield put(actionsAuth.signInSuccess(token, userId, expirationDate));
  }
}
