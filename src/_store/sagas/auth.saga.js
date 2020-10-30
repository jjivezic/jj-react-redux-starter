import { call, put, takeEvery } from 'redux-saga/effects'
import { authActions } from '../actions/auth.actions';
import userService from '../../_services/user.service';
import { authConstants } from "../constants";
import { sessionService } from '../../_sessionService/storage';
import { history } from '../../_utils';

export function* login(data) {
  yield put(authActions.loginRequest())
  const { response, error } = yield call(userService.login, data)
  console.log('Response Login', response, error)
  if (response) {
    yield put(authActions.loginSuccess(response));
    sessionService.set('user', response);
    history.push('/app');
  } else {
    yield put(authActions.loginFailure(error));
  }
}

export function* hello() {
  console.log('HELLOOOOOOOOOO')
  yield 'Helooooooooooo'
}

export function* watchLogin() {
  yield takeEvery(authConstants.LOGIN, login)
}
export function* watchHello() {
  yield takeEvery('LOGOUT', hello)
}


export const authSagas = [
  watchLogin,
  watchHello
];