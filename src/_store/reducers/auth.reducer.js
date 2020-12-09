import { authConstants } from '../constants';
const user = JSON.parse(localStorage.getItem('user'));
const initialUser = user ? user : null;
const initialState = {
    user: initialUser
}
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case authConstants.LOGIN_FAILURE:
      return {
        ...state
      };
    case authConstants.LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state
  }
}