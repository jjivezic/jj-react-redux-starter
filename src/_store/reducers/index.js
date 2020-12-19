import { combineReducers } from 'redux';
import { authConstants } from '../constants/auth.constants';
import { auth } from './auth.reducer';
import { other} from './other.reducer';
import { modal} from './modal.reducer';


const appReducer = combineReducers({
  auth,
  modal,
  other
});

const rootReducer = (state, action) => {
  //reset store to initial state
    if (action.type === authConstants.LOGOUT) {
        state = undefined
    }

    return appReducer(state, action)
}
export default rootReducer;