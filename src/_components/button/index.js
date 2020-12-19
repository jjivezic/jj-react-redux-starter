import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ label, variation,size, btnClass, iconRight, iconLeft, disabled = false, spinner = false, onClick }) => {
  return (
    <>
      {!spinner ? <button className={`${styles[variation]} ${styles[size]} ${styles[btnClass]}`} onClick={onClick} disabled={disabled}>
        {iconLeft && <i className={styles.iconLeft}>{iconLeft}</i>}
        {label && <span>{label}</span>}
        {iconRight && <i className={styles.iconRight}>{iconRight}</i>
        }
      </button> : <button className={`${styles[variation]} ${styles[size]} ${styles[btnClass]}`} disabled={disabled}>
          <i className="fa fa-spinner fa-spin" aria-hidden="true" ></i>
        </button>}
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  btnClass: PropTypes.string,
  variation: PropTypes.string,
  spinner: PropTypes.bool,
  iconRight: PropTypes.object,
  iconLeft: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
