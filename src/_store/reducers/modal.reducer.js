import { modalConstants } from '../constants';
const initialState = {
  show: false,
  content: {},
  name: '',
  size: ''
};

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case modalConstants.SHOW_MODAL:
      return {
        content: action.content,
        show: action.show,
        name: action.name,
        size: action.size
      };
    case modalConstants.HIDE_MODAL:
      return {
        ...state,
        show: false
      }
    default:
      return state;
  }
};
