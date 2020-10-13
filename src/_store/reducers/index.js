import { combineReducers } from 'redux';

import { auth } from './auth.reducer';
import { register} from './register.reducer';

const rootReducer = combineReducers({
  auth,
  register
});

export default rootReducer;