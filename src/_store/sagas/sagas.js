import { all, call,spawn } from 'redux-saga/effects'
import { authSagas } from './auth.saga';

export default  function* rootSaga () {
  const sagas = [
    ...authSagas
  ];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (err) {
          console.log('error in root saga',err)
        }
      }
    }))
  );
}