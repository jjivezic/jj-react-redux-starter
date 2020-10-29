import { all, call, delay, put, takeEvery } from 'redux-saga/effects'
import { userActions } from '../actions/sagas.actions';
import userService from '../../_services/user.service';
import { userConstants } from "../constants";
export function* login(data) {
  console.log('Hello LOGIN!',data)
  yield put(userActions.loginRequest())
  const { response, error } = yield call(userService.login,data)
  console.log('Response Login',response,error)
  response ? yield put(userActions.loginSuccess(response)) : yield put(userActions.loginFailure(error));
}
export function* hello() {
console.log('HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOoo')
}
export function* watchLogin() {
  yield takeEvery(userConstants.LOGIN, login)
}
export function* watchHello() {
  yield takeEvery('LOGOUT', hello)
}


export const loginSagas = [
  // call(watchLogin),
  // call(watchLogin2)
  watchLogin,
  watchHello
];