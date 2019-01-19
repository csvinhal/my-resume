import { call, put } from 'redux-saga/effects';
import { actions } from '../reducers/auth';
import { register } from '../shared/auth';

export function* signup(action) {
    try {
        const response = yield call(register, action.email, action.password);
        yield put(actions.signUpSuccess(response.idToken, response.localId, response.expirationDate));
    } catch (err) {
        yield put(actions.signUpFailed(err.response.data.error));
    }
}