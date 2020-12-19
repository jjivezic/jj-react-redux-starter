
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './confirm.module.scss';
import Button from '../../button';

const ConfirmModal = ({ show, handleSubmit, modalData, question }) => {
  const [modalIsOpen] = useState(show);
  const [t] = useTranslation();
  const handleAnswer = (answer) => {
    handleSubmit(answer, modalData)
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
        <span className={styles.close} onClick={() => { handleAnswer(false) }}><i className="fa fa-times" aria-hidden="true"></i></span>
        <h4 className={styles.title}> {t(question)}</h4>
        <div className={styles.modalFooter}>
          <Button
            variation="basic"
            btnClass="primary"
            size="sm"
            label={t('YES')}
            onClick={() => { handleAnswer(true) }} />
          <Button
            variation="basic"
            btnClass="secondary"
            size="sm"
            label={t('NO')}
            onClick={() => { handleAnswer(false) }} />
        </div>
      </div>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  show: PropTypes.bool,
  modalData: PropTypes.object,
  handleSubmit: PropTypes.func,
  question: PropTypes.string,
};

export default ConfirmModal;