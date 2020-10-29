import { all, call, delay, put, takeEvery } from 'redux-saga/effects'
import { userActions } from '../actions/sagas.actions';
import userService from '../../_services/user.service';
import { userConstants } from "../constants";
import { sessionService } from '../../_sessionService/storage';
import { history } from '../../_utils';

export function* login(data) {
  yield put(userActions.loginRequest())
  const { response, error } = yield call(userService.login, data)
  console.log('Response Login', response, error)
  if (response) {
    yield put(userActions.loginSuccess(response));
    sessionService.set('user', response);
    history.push('/app');
  } else {
    yield put(userActions.loginFailure(error));
  }
}

export function* hello() {
  console.log('HELLOOOOOOOOOO')
}

export function* watchLogin() {
  yield takeEvery(userConstants.LOGIN, login)
}
export function* watchHello() {
  yield takeEvery('LOGOUT', hello)
}


export const authSagas = [
  watchLogin,
  watchHello
];