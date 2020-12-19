import React from 'react';
import ElementsWrapper from '../../_components/elementsWrapper';
import ModalVariations from './ModalVariations';
import styles from './landing.module.scss';
import ButtonsVariations from './buttonsVariations';

const Landing = () => {

  return (
    <div className={styles.wrapper}>
      <h2>Basic react starter with redux thunk/saga,modules scss, translations, modals, basic commponents </h2>
      <ElementsWrapper title="Modal" subtitle="Modal with custom content and confirm modal">
        <ModalVariations />
      </ElementsWrapper>
      <ElementsWrapper title="Buton" subtitle="Different variations of buttons shapes and sizes">
        <ButtonsVariations />
      </ElementsWrapper>
      <ElementsWrapper title="Input" subtitle="Different variations of inputs">

      </ElementsWrapper>
      <ElementsWrapper title="Checkbox" subtitle="Different variations of checkbox">

      </ElementsWrapper>
      <ElementsWrapper title="Radio input" subtitle="Different variations of radio inputs">

      </ElementsWrapper>
      <ElementsWrapper title="Select" subtitle="Different variations of select">

      </ElementsWrapper>
    </div>)
}

export default Landing;