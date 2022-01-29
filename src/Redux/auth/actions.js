import types from './types';

export const setUserInfo = userObj => ({
    type: types.SET_USER_INFO,
    payload: userObj
});

export const setUserLoggedIn = loggedIn => ({
    type: types.USER_LOGGED_IN,
    payload: loggedIn
});
