import React from 'react';
import styles from './how.module.scss';
import Bro from './Bro';

const HowItWorks = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.step}>
          <div className={styles.box}>
            <div className={styles.inner_circle}>
              <h5>STEP</h5>
              <h2>01</h2>
            </div>
          </div>
          <div className={styles.bro}>
            <Bro right color='#8922d5' />
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.box}>
            <div className={styles.inner_circle}>
              <h5>STEP</h5>
              <h2>02</h2>
            </div>
          </div>
          <div className={styles.bro}>
            <Bro color='#0197f6' />
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.box}>
            <div className={styles.inner_circle}>
              <h5>STEP</h5>
              <h2>03</h2>
            </div>
          </div>
          <div className={styles.bro}>
            <Bro right color='#ff5f8b' />
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.box}>
            <div className={styles.inner_circle}>
              <h5>STEP</h5>
              <h2>04</h2>
            </div>
          </div>
          <div className={styles.bro}>
            <Bro color='#ff9f00' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
