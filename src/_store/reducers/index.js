import { combineReducers } from 'redux';

import { auth } from './auth.reducer';
import { others } from './other.reducer';

const rootReducer = combineReducers({
  auth,
  others
});

export default rootReducer;