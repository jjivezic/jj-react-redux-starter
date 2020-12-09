import { otherConstants } from '../constants';

export const other = (state = {}, action) => {
  switch (action.type) {
    case otherConstants.OTHER_REQUEST:
      return {
        ...state
      };
    case otherConstants.OTHER_SUCCESS:
      return {
        ...state
      };
    case otherConstants.OTHER_FAILURE:
      return {
        ...state
      };
    default:
      return state
  }
}