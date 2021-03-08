
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './modal.module.scss';
import Button from '../button/button';

const ConfirmModal = ({ show, handleYesNoAnswer, modalData,question }) => {
  const [modalIsOpen] = useState(show);
  const [t] = useTranslation();
  const handleSubmit = (answer) => {
    handleYesNoAnswer(answer, modalData)
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      contentLabel="Custom modal"
      className={`${styles.customModal} ${styles.md} ${styles.modalYesNo}`}
      overlayClassName={styles.customOverlay}
      ariaHideApp={false}
    >
      <div className={styles.modalBody}>
        <span className={styles.close} onClick={() => { handleSubmit(false) }}><i className="fa fa-times" aria-hidden="true"></i></span>
        <h4 className={styles.title}> {t(question)}</h4>
        <div className={styles.modalFooter}>
          <Button btnClass="btnPrimary"
            label={t('d13586174')}
            onClick={() => { handleSubmit(true) }} />
          <Button btnClass="btnSecondary"
            label={t('d13276142')}
            onClick={() => { handleSubmit(false) }} />
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;