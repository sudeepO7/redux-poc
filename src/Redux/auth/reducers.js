import types from './types';

const INITIAL_STATE = {
  userInfo: null,
  isUserLoggedIn: false
};

const authReducer = (state, action) => {
    state = state ? state : INITIAL_STATE;
    switch(action.type) {
      case types.SET_USER_INFO: {
        const { payload } = action;
        return {
          ...state,
          userInfo: payload
        }
      }
      case types.USER_LOGGED_IN: {
        const { payload } = action;
        return {
          ...state,
          isUserLoggedIn: payload
        }
      }
      default:
        return {
          ...state
        };
    }
};

export default authReducer;
