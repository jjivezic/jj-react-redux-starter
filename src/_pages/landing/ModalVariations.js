import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Button from '../../_components/button';
import ConfirmModal from '../../_components/modal/confirm';
import { modalActions } from '../../_store/actions/modal.actions';
import styles from './landing.module.scss';
const SomeComponets = () => {
  return (
    <div>
      <h4>Insert any component with any content you want.</h4>
      <h6>Change the size of modal just by adding class xs,md,lg,xlg</h6>
    </div>
  )
}
const ModalVariations = () => {
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});
  const openBasicModal = () => {
    dispatch(modalActions.openModal(<SomeComponets />, 'Some modal', 'lg'));
  }
  const openConfirmModal = (data) => {
    setShow(true);
    setModalData(setModalData)
  }
  const handleDelete = (answer, data) => {
    if (answer) {
      //Delete user
      setShow(false);
    } else {
      //Do nothing
      setShow(false);
    }
  }
  return (
    <div className={styles.modalsVariations}>
      {show && <ConfirmModal show={show} handleSubmit={handleDelete} modalData={modalData} question='Are you sure you want delete this item?' />}
      <Button
        variation="basic"
        btnClass="primary"
        size="md"
        label={t('Basic modal')}
        onClick={openBasicModal} />
      <Button
        variation="basic"
        btnClass="secondary"
        size="md"
        label={t('Confirm modal')}
        onClick={openBasicModal}
        onClick={() => openConfirmModal({ user: 'cordiaca', id: 1 })}
      />
    </div>
  );
}

export default ModalVariations;