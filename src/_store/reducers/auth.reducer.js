import { authConstants } from '../constants';

let fetchedUser = JSON.parse(localStorage.getItem('user'));
const initialState = fetchedUser ? {user:fetchedUser} : {};

export const auth = (state = initialState, action) => {
  console.log('USER REDUCER ACTION',action)
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        user: action.payload
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        user: action.payload
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