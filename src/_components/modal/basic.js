import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './modal.module.scss';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../_store/actions/modal.actions';

const BasicModal = ({ show, content, size = 'md' }) => {
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
          <div className={styles.scrollWrapper}>
            <span className={styles.close} onClick={closeModal}><i className="fa fa-times" aria-hidden="true"></i></span>
            {content}
          </div>
      </div>
    </Modal>
    </div>
  );
};


export default BasicModal;
