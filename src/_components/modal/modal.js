import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './modal.module.scss';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../_store/actions/modal.actions';
// import PerfectScrollbar from 'react-perfect-scrollbar';
//import 'react-perfect-scrollbar/dist/css/styles.css';

const ModalWrapper = ({ show, content, size = 'md' }) => {
  const [modalIsOpen] = useState(show);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };
  return (
    <div className="modal-c">
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Custom modal"
      className={`${styles.customModal} ${styles[size]}`}
      overlayClassName={styles.customOverlay}
      ariaHideApp={false}
    >
      <div className={styles.modalBody}>
        {/* <PerfectScrollbar className="purpleScroll"> */}
          <div className={styles.scrollWrapper}>
            <span className={styles.close} onClick={closeModal}><i className="fa fa-times" aria-hidden="true"></i></span>
            {content}
          </div>
        {/* </PerfectScrollbar> */}
      </div>
    </Modal>
    </div>
  );
};

ModalWrapper.propTypes = {
  show: PropTypes.bool,
  content: PropTypes.object,
};

export default ModalWrapper;
