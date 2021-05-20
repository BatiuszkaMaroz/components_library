import React from 'react';
import styles from './Center.module.scss';

const Center: React.FC = () => {
  return (
    <div className={styles.center}>
      <section>
        <div className={styles.box}>Position Absolute</div>
      </section>
      <section>
        <div className={styles.box}>Flexbox</div>
      </section>
      <section>
        <div className={styles.box}>Grid - Self</div>
      </section>
      <section>
        <div className={styles.box}>Grid - Place Items</div>
      </section>
      <section>
        <div className={styles.box}>Grid - Margin Auto</div>
      </section>
    </div>
  );
};

export default Center;
