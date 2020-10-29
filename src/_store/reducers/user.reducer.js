import { userConstants } from '../constants';

let fetchedUser = JSON.parse(localStorage.getItem('user'));
const initialState = fetchedUser ? {user:fetchedUser} : {};

export const auth = (state = initialState, action) => {
  console.log('USER REDUCER ACTION',action)
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        user: action.payload
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        user: action.payload
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state
  }
}