import { sessionService } from "../../_sessionService/storage";
import { history } from "../../_utils";
import { authConstants } from "../constants";

const loginRequest = () => {
  return { type: authConstants.LOGIN_REQUEST };
};

const loginSuccess = (payload) => {
  return { type: authConstants.LOGIN_SUCCESS, payload }
};

const loginFailure = (error) => {
  return { type: authConstants.LOGIN_FAILURE, error };
};

// const fetchUser = () => {
//   return { type: authConstants.FETCHED_USER}
// };

const login = (payload) => {
  return {
    type: authConstants.LOGIN,
    ...payload
  }
};
const logout = () => {
  sessionService.destroy('user');
  sessionStorage.clear();
  history.push('/');
  return { type: authConstants.LOGOUT };
};
export const authActions = {
  login,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout
};