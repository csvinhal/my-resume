export const types = {
    SIGNIN_REQUEST: 'SIGNIN_REQUEST',
    SIGNUP_REQUEST: 'SIGNUP_REQUEST',
    SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
    SIGNUP_FAILED: 'SIGNUP_FAILED',
    CLOSE_ALERT: 'CLOSE_ALERT',
};

const initialState = {
    token: null,
    userId: null,
    expirationDate: null,
    isLoading: false,
    shouldRedirect: false,
    error: null
};

const requestStarted = (state, action) => {
    return { ...state, isLoading: true, error: null };
};

const requestSucceeded = (state, action) => {
    return {
        ...state,
        token: action.token,
        userId: action.userId,
        expirationDate: action.expirationDate,
        isLoading: false,
        shouldRedirect: true
    };
}

const requestFailed = (state, action) => {
    return { ...state, isLoading: false, error: action.error };
};

const closeAlert = (state, action) => {
    return { ...state, error: null };
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SIGNIN_REQUEST:
        case types.SIGNUP_REQUEST:
            return requestStarted(state, action);
        case types.SIGNIN_SUCCESS:
        case types.SIGNUP_SUCCESS:
            return requestSucceeded(state, action);
        case types.SIGNUP_FAILED:
            return requestFailed(state, action);
        case types.CLOSE_ALERT:
            return closeAlert(state, action);
        default:
            return state;
    }
}

export const actions = {
    signup: (email, password) => ({ type: types.SIGNUP_REQUEST, email, password }),
    login: (email, password) => ({ type: types.SIGNIN_REQUEST, email, password }),
    signUpSuccess: (token, userId, expirationDate) => ({ type: types.SIGNUP_SUCCESS, token, userId, expirationDate }),
    signUpFailed: (error) => ({ type: types.SIGNUP_FAILED, error }),
    closeAlert: () => ({ type: types.CLOSE_ALERT }),
}