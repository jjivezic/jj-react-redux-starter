import { all, call, delay, put, takeEvery } from 'redux-saga/effects'
import { request, success, failure } from '../actions/sagas.actions';
import userService from '../../_services/user.service';
export function* login(data) {
  console.log('Hello LOGIN!')
     yield put(request())
     const { response, error } = yield call(userService.login(data))
     response ?  yield put(success(response)) : yield put(failure(error));
  // try {
  //   yield put(request())
  //   const { response, error } = yield call(userService.login(data))
  //   //let responese = userService.login(data)
  //   yield put(success(responese))
  // } catch (error) {
  //   yield put(failure(error))
  // }
}
export function* watchLogin() {
  yield takeEvery('FETCH_REQUESTED', login)
}
export function* watchLogin2() {
  yield takeEvery('FETCH_REQUESTED', login)
}


export const loginSagas = [
  call(watchLogin),
  call(watchLogin2)
];

// export const templatesSaga = [
//   takeLatest('GET_AP_TEMPLATES', pushTemplatesToStore),
//   takeLatest('ADD_NEW_TEMPLATE', addNewTemplateToStore),
//   takeEvery('LOAD_TEMPLATE_OBJECT', addTemplateObjectToStore),
// ];