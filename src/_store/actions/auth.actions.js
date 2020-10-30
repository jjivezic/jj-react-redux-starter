import { sessionService } from "../../_sessionService/storage";
import { history } from "../../_utils";
import { authConstants } from "../constants";

const loginSuccess = (payload) => {
  return { type: authConstants.LOGIN_SUCCESS, payload }
};

const loginFailure = (error) => {
  return { type: authConstants.LOGIN_FAILURE, error };
};

const login = (payload) => {
  return {
    type: authConstants.LOGIN_REQUEST,
    ...payload
  }
};
const logout = () => {
  return { type: authConstants.LOGOUT };
};
export const authActions = {
  login,
  loginSuccess,
  loginFailure,
  logout
};