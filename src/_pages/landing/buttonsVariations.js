import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../_components/button';
import styles from './landing.module.scss';
const ButtonsVariations = () => {
  const [t] = useTranslation();
  return (
    <div className={styles.buttonsVariations}>
      <h5>Size:sm,md</h5>
      <h5>Variation:basic,cube,rounded </h5>
      <h5>Class:primary,secondary</h5>
      <h5>Icons: left,right,middle</h5>
      <div className={styles.btnGroup}>
        <h3>Small size</h3>
        <div className={styles.btns}>
          <Button variation="basic" btnClass="primary" size="sm" label={t('basic primary')} />
          <Button variation="basic" btnClass="secondary" size="sm" label={t('basic secondary')} />
          <Button variation="cube" btnClass="primary" size="sm" label={t('cube primary')} />
          <Button variation="cube" btnClass="secondary" size="sm" label={t('cube secondary')} />
          <Button variation="rounded" btnClass="secondary" size="sm" label={t('rounded  secondary')} />
          <Button variation="rounded" btnClass="primary" size="sm" label={t('rounded primary')} />
        </div>
      </div>
      <div className={styles.btnGroup}>
        <h3>Medium size </h3>
        <div className={styles.btns}>
          <Button variation="basic" btnClass="primary" size="md" label={t('basic md primary')} />
          <Button variation="basic" btnClass="secondary" size="md" label={t('basic md secondary')} />
          <Button variation="cube" btnClass="primary" size="md" label={t('cube md primary')} />
          <Button variation="cube" btnClass="secondary" size="md" label={t('cube md secondary')} />
          <Button variation="rounded" btnClass="primary" size="md" label={t('rounded md primary')} />
          <Button variation="rounded" btnClass="secondary" size="md" label={t('rounded md secondary')} />
        </div>
      </div>
      <div className={styles.btnGroup}>
        <h3>Icons</h3>
        <div className={styles.btns}>
          <Button variation="basic" btnClass="primary" size="sm" label={<i className="fa fa-comments" aria-hidden="true"></i>} />
          <Button variation="cube" btnClass="secondary" size="sm" label={<i className="fa fa-cog" aria-hidden="true"></i>} />
          <Button variation="rounded" btnClass="primary" size="sm" label={<i className="fa fa-trash-o" aria-hidden="true"></i>} />
          <Button variation="basic" btnClass="primary" size="md" label={t('Icon')} iconRight={<i className="fa fa-pencil-square-o" aria-hidden="true"></i>} />
          <Button variation="cube" btnClass="secondary" size="md" label={t('Icon')} iconLeft={<i className="fa fa-arrow-left" aria-hidden="true"></i>} />
          <Button variation="rounded" btnClass="primary" size="md" label={t('Icon')} iconRight={<i className="fa fa-trash-o" aria-hidden="true"></i>} />
          <Button variation="rounded" btnClass="secondary" size="md" label={t('Icon')} iconLeft={<i className="fa fa-arrow-left" aria-hidden="true"></i>}/>
        </div>
      </div>
    </div>);
}

export default ButtonsVariations;