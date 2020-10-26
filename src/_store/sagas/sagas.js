import { all, call, delay, put, takeEvery } from 'redux-saga/effects'
import userService from '../../_services/user.service';
import { userConstants } from '../constants';
import { request, success, failure } from '../actions/sagas.actions';
import { loginSagas } from './login.saga';

export function* helloSaga() {
  console.log('Hello Saga!')
}
export function* login(data) {
  console.log('Hello LOGIN!')
  try {
    yield put(request())
    let responese = yield call(userService.login(data))
    yield put(success(responese))
  } catch (error) {
    yield put(failure(error))
  }
}
function* watchLogin() {
  yield takeEvery('FETCH_REQUESTED', login)
}

export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    ...loginSagas,
    // call(helloSaga),
    // call(watchIncrementAsync),
    call(watchLogin),
  ])
}