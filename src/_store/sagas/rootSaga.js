import { all, call,spawn } from 'redux-saga/effects'
import { authSagas } from './auth.saga';
//fork
export default  function* rootSaga () {
  //ovde vraca objekat
  console.log('Sagas',authSagas)
  yield all([
    ...authSagas
  ])
}

//spawn
// export default  function* rootSaga () {
//   console.log('Sagas',authSagas);
//   //ovde vraca generator funkciju
//   const sagas = [
//     ...authSagas
//   ];
//   yield all(sagas.map(saga =>
//     spawn(function* () {
//       while (true) {
//         try {
//           yield call(saga)
//           break
//         } catch (err) {
//           console.log('error in root saga',err)
//         }
//       }
//     }))
//   );
// }