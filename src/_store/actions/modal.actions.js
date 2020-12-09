import { modalConstants } from '../constants';

const openModal = (content, name, size) => {
  return dispatch => {
    dispatch({ type: modalConstants.SHOW_MODAL, content, name, show: true, size });
  };
};
const closeModal = () => {
  return dispatch => {
    dispatch({ type: modalConstants.HIDE_MODAL });
  };
};

export const modalActions = {
  openModal,
  closeModal
};
