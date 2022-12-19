import React from 'react';
import styles from './how-it-works.module.scss';
import StepDescriptor from './StepDescriptor';

const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>How it works</h2>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.step}>
          <div className={styles.box}>
            <div className={styles.inner_circle}>
              <h5>STEP</h5>
              <h2>01</h2>
            </div>
          </div>
          <div className={styles.bro}>
            <StepDescriptor
              right
              color='#8922d5'
              title='register'
              subtitle='create account with your details'
            />
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
            <StepDescriptor
              color='#0197f6'
              title='category'
              subtitle='Choose category in which your project fits'
            />
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
            <StepDescriptor
              right
              color='#ff5f8b'
              title='enlist'
              subtitle='Create project with required funding goal'
            />
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
            <StepDescriptor
              color='#ff9f00'
              title='funds'
              subtitle='Track funds, contributed by other users, investors (crowd) '
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
