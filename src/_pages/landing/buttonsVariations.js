import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../_components/button';
import styles from './landing.module.scss';
const ButtonsVariations = () => {
  const [t] = useTranslation();
  return (
    <div className={styles.buttonsVariations}>
      <h5>Size:lg,md,sm</h5>
      <h5>Variation:basic,cube,rounded </h5>
      <h5>Class:primary,secondary,default</h5>
      <h5>Icons: left,right,middle</h5>
      <div className={styles.btnGroup}>
        <h3>Large size </h3>
        <div className={styles.btns}>
          <Button variation="basic" btnClass="primary" size="lg" label={t('Basic primary')} />
          <Button variation="basic" btnClass="secondary" size="lg" label={t('Basic secondary')} />
          <Button variation="basic" btnClass="default" size="lg" label={t('Basic default')} />
          <Button variation="cube" btnClass="primary" size="lg" label={t('Cube primary')} />
          <Button variation="cube" btnClass="secondary" size="lg" label={t('Cube secondary')} />
          <Button variation="cube" btnClass="default" size="lg" label={t('Cube default')} />
          <Button variation="rounded" btnClass="primary" size="lg" label={t('Rounded primary')} />
          <Button variation="rounded" btnClass="secondary" size="lg" label={t('Rounded secondary')} />
          <Button variation="cube" btnClass="default" size="lg" label={t('Raunded default')} />
        </div>
      </div>
      <div className={styles.btnGroup}>
        <h3>Medium size </h3>
        <div className={styles.btns}>
          <Button variation="basic" btnClass="primary" size="md" label={t('Basic primary')} />
          <Button variation="basic" btnClass="secondary" size="md" label={t('Basic secondary')} />
          <Button variation="basic" btnClass="default" size="md" label={t('Basic default')} />
          <Button variation="cube" btnClass="primary" size="md" label={t('Cube primary')} />
          <Button variation="cube" btnClass="secondary" size="md" label={t('Cube secondary')} />
          <Button variation="cube" btnClass="default" size="md" label={t('Cube default')} />
          <Button variation="rounded" btnClass="primary" size="md" label={t('Rounded primary')} />
          <Button variation="rounded" btnClass="secondary" size="md" label={t('Rounded secondary')} />
          <Button variation="cube" btnClass="default" size="md" label={t('Raunded default')} />
        </div>
      </div>
      <div className={styles.btnGroup}>
        <h3>Small size</h3>
        <div className={styles.btns}>
          <Button variation="basic" btnClass="primary" size="sm" label={t('B primary')} />
          <Button variation="basic" btnClass="secondary" size="sm" label={t('B secondary')} />
          <Button variation="basic" btnClass="default" size="sm" label={t('D default')} />
          <Button variation="cube" btnClass="primary" size="sm" label={t('C primary')} />
          <Button variation="cube" btnClass="secondary" size="sm" label={t('C secondary')} />
          <Button variation="cube" btnClass="default" size="sm" label={t('C default')} />
          <Button variation="rounded" btnClass="secondary" size="sm" label={t('R secondary')} />
          <Button variation="rounded" btnClass="primary" size="sm" label={t('R primary')} />
          <Button variation="rounded" btnClass="default" size="sm" label={t('R default')} />
        </div>
      </div>

      <div className={styles.btnGroup}>
        <h3>Icons</h3>
        <div className={styles.btns}>
          <Button variation="basic" btnClass="primary" size="sm" label={<i className="fa fa-comments" aria-hidden="true"></i>} />
          <Button variation="cube" btnClass="secondary" size="sm" label={<i className="fa fa-cog" aria-hidden="true"></i>} />
          <Button variation="rounded" btnClass="primary" size="sm" label={<i className="fa fa-trash-o" aria-hidden="true"></i>} />
          <Button variation="basic" btnClass="default" size="sm" label={<i className="fa fa-trash-o" aria-hidden="true"></i>} />
          <Button variation="basic" btnClass="primary" size="md" label={t('Icon')} iconRight={<i className="fa fa-pencil-square-o" aria-hidden="true"></i>} />
          <Button variation="cube" btnClass="secondary" size="md" label={t('Icon')} iconLeft={<i className="fa fa-arrow-left" aria-hidden="true"></i>} />
          <Button variation="rounded" btnClass="primary" size="md" label={t('Icon')} iconRight={<i className="fa fa-trash-o" aria-hidden="true"></i>} />
          <Button variation="rounded" btnClass="secondary" size="md" label={t('Icon')} iconLeft={<i className="fa fa-arrow-left" aria-hidden="true"></i>} />
        </div>
      </div>
      <div className={styles.btnGroup}>
        <h3>Disabled, Bordered, Spinner</h3>
        <div className={styles.btns}>
          <Button variation="basic" btnClass="primary" size="md" label={t('disabled')} iconLeft={<i className="fa fa-minus-circle" aria-hidden="true"></i>} disabled={true} />
          <Button variation="basic" btnClass="secondary" size="md" label={t('disabled')} iconRight={<i className="fa fa-minus-circle" aria-hidden="true"></i>} disabled={true} />
          <Button variation="basic" btnClass="default" size="md" label={t('disabled')} iconRight={<i className="fa fa-minus-circle" aria-hidden="true"></i>} disabled={true} />
          <Button variation="cube" btnClass="primary" size="md" spinner={true} />
          <Button variation="cube" btnClass="secondary" size="md" label={t('Bordered 1px')} border="br__1px" />
          <Button variation="rounded" btnClass="primary" size="md" label={t('Bordered 2px')} border="br__2px" />
          <Button variation="rounded" btnClass="secondary" size="md" label={t('Disabled bordered 1px')} border="br__1px" disabled={true} />
        </div>
      </div>
    </div>);
}

export default ButtonsVariations;