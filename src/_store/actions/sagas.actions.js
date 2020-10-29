import { userConstants } from "../constants";

const loginRequest = () => {
  return { type: userConstants.LOGIN_REQUEST };
};

const loginSuccess = (payload) => {
  return { type: userConstants.LOGIN_SUCCESS, payload }
};

const loginFailure = (error) => {
  return { type: userConstants.LOGIN_FAILURE, error };
};

// const fetchUser = () => {
//   return { type: userConstants.FETCHED_USER}
// };

const login = (payload) => {
  return {
    type: userConstants.LOGIN,
    ...payload
  }
};

export const userActions = {
  login,
  loginRequest,
  loginSuccess,
  loginFailure
};