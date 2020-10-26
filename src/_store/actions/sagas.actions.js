import { userConstants } from "../constants";

export const request = () => { return { type: userConstants.LOGIN_REQUEST }; };
export const success = (payload) => { return { type: userConstants.LOGIN_SUCCESS, payload }; };
export const failure = (payload) => { return { type: userConstants.LOGIN_FAILURE, payload }; };