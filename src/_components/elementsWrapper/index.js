import React from 'react';
import styles from './elements.module.scss';
const ElementsWrapper = ({ title, children, subtitle }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default ElementsWrapper;