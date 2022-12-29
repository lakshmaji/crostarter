import React from 'react';
import styles from './hero.module.scss';
import Button from '../../../components/Button/Button';
import heroImg from './hero.jpeg';

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.header_body}>
              <h1 className={styles.title}>Crowd funding</h1>
              <p className={styles.tag_line}>
                Lorem ipsum sit amet consectetur dolor, adipiscing elit.
              </p>
              <div className={styles.footer}>
                <Button title='See Projects' to='/projects' />
              </div>
            </div>
          </div>
          <div className={styles.picture}>
            <img src={heroImg} alt='Crostarter' className={styles.avatar} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
