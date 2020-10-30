import { call, put, takeEvery, fork, takeLatest } from 'redux-saga/effects'
import { authActions } from '../actions/auth.actions';
import userService from '../../_services/user.service';
import { authConstants } from "../constants";
import { sessionService } from '../../_sessionService/storage';
import { history } from '../../_utils';

export function* login(data) {
  const { response, error } = yield call(userService.login, data)
  if (response) {
    yield put(authActions.loginSuccess(response));
    sessionService.set('user', response);
    history.push('/app');
  } else {
    yield put(authActions.loginFailure(error));
  }
}

export function* logout() {
  sessionService.destroy('user');
  sessionStorage.clear();
  history.push('/');
  yield call(authActions.logout);

}

export function* watchLogin() {
  yield takeEvery(authConstants.LOGIN_REQUEST, login)
}
export function* watchLogout() {
  yield takeEvery(authConstants.LOGOUT, logout)
}

//For spawn
// export const authSagas = [
//   watchLogin, 
//   watchHello
// ];

//For fork
// export const authSagas = [
//   takeEvery(authConstants.LOGIN_REQUEST, login),
//   takeEvery('LOGOUT', hello)
// ];
export const authSagas = [
  fork(watchLogin), //fork or call
  fork(watchLogout)
];
