import { all, call, delay, put, takeEvery } from 'redux-saga/effects'
import { userActions } from '../actions/sagas.actions';
import userService from '../../_services/user.service';
import { userConstants } from "../constants";
export function* login(data) {
  console.log('Hello LOGIN!')
  yield put(userActions.loginRequest())
  const { response, error } = yield call(userService.login(data))
  response ? yield put(userActions.loginSuccess(response)) : yield put(userActions.loginFailure(error));
  // try {
  //   yield put(request())
  //   const { response, error } = yield call(userService.login(data))
  //   //let responese = userService.login(data)
  //   yield put(success(responese))
  // } catch (error) {
  //   yield put(failure(error))
  // }
}
export function* hello() {
  yield takeEvery(userConstants.LOGOUT, login)
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

// export const templatesSaga = [
//   takeLatest('GET_AP_TEMPLATES', pushTemplatesToStore),
//   takeLatest('ADD_NEW_TEMPLATE', addNewTemplateToStore),
//   takeEvery('LOAD_TEMPLATE_OBJECT', addTemplateObjectToStore),
// ];