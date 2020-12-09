import React from 'react';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../_store/actions/modal.actions';
import styles from './landing.module.scss';
const SomeComponets = () => {
  return (
    <div>
      Add some Modal Content
    </div>
  )
}
const Landing = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(modalActions.openModal(<SomeComponets />, 'Some modal', 'lg'));
  }
  return (
    <div className={styles.wrapper}>
      <h2>Starter JJ </h2>
      <h2>Basic starter with redux thung or saga,modules scss,translations,modal </h2>
      <button onClick={openModal}>Open modal</button>
    </div>)
}

export default Landing;