import { userConstants } from '../constants';

export const others = (state = {}, action) => {
  switch (action.type) {
    case userConstants.OTHER_REQUEST:
      return state;
    case userConstants.OTHER_SUCCESS:
      return state;
    case userConstants.OTHER_FAILURE:
      return state;
    default:
      return state
  }
}