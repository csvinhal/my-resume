import moment from "moment";
import { call, put } from "redux-saga/effects";
import * as fromAlertState from "../reducers/alert";
import { actions } from "../reducers/auth";
import * as fromLoadingState from "../reducers/loadingState";
import {
  isValidToken,
  login,
  register,
  removeStorageData,
} from "../shared/auth";

export function* signUp(action) {
  try {
    yield fromLoadingState.actions.showLoader();
    const response = yield call(register, action.email, action.password);
    yield put(
      actions.signUpSuccess(
        response.idToken,
        response.localId,
        response.expirationDate
      )
    );
  } catch (err) {
    yield put(actions.signUpFailed(err.response.data.error));
  }

  yield fromLoadingState.actions.closeLoader();
}

export function* signIn(action) {
  try {
    yield put(fromLoadingState.actions.showLoader());
    const response = yield call(login, action.email, action.password);
    yield put(
      actions.signInSuccess(
        response.idToken,
        response.localId,
        response.expirationDate
      )
    );
  } catch (err) {
    yield put(fromLoadingState.actions.closeLoader());
    yield put(
      fromAlertState.actions.showErrorMessage(err.response.data.error.message)
    );
    yield put(actions.signInFailed());
  }

  yield fromLoadingState.actions.closeLoader();
}

export function* checkAuthTokenValidate(action) {
  const isValid = yield call(isValidToken, action.expirationDate);
  if (!isValid) {
    yield call(removeStorageData);
    yield put(actions.signOut());
  }
}

export function* checkLocalStorageTokenValidate() {
  const token = yield localStorage.getItem("token");
  if (!token) {
    yield call(removeStorageData);
    yield put(actions.signOut());
  } else {
    const userId = yield localStorage.getItem("userId");
    const expirationDate = yield moment(
      new Date(localStorage.getItem("expirationDate"))
    );
    yield put(actions.signInSuccess(token, userId, expirationDate));
  }
}
