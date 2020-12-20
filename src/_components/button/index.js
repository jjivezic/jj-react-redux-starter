import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({
  label,
  variation,
  size,
  btnClass,
  iconRight,
  iconLeft,
  disabled = false,
  spinner = false,
  border,
  onClick }) => {
  return (
    <>
      {!spinner ? <button className={`${styles[variation]} ${styles[size]} ${styles[btnClass]}  ${border ? styles[border] : ""}`} onClick={onClick} disabled={disabled}>
        {iconLeft && <small className={styles.iconLeft}>{iconLeft}</small>}
        {label && <span>{label}</span>}
        {iconRight && <small className={styles.iconRight}>{iconRight}</small>
        }
      </button> : <button className={`${styles[variation]} ${styles[size]} ${styles[btnClass]}  ${border ? styles[border] : ""}`} disabled={disabled}>
          <i className="fa fa-spinner fa-spin" aria-hidden="true" ></i>
        </button>}
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  btnClass: PropTypes.string,
  border: PropTypes.string,
  variation: PropTypes.string,
  spinner: PropTypes.bool,
  iconRight: PropTypes.object,
  iconLeft: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
