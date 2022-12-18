import React from 'react';
import { IoChevronForwardCircle } from '@react-icons/all-files/io5/IoChevronForwardCircle';
import styles from './hero.module.scss';
import Button from '../../components/Button/Button';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.card_wrapper}>
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.header_body}>
              <h1 className={styles.title}>Crowd funding</h1>
              <p className={styles.tag_line}>
                Lorem ipsum sit amet consectetur dolor, adipiscing elit.
              </p>
              <div className={styles.footer}>
                {/* <a href='/projects' className={styles.btn}>
                  Get Started
                  <IoChevronForwardCircle className={styles.btn_icon} />
                </a> */}
                <Button />
              </div>
            </div>
          </div>
          <div className={styles.picture}>
            <img
              src='https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features3.jpg'
              alt='Mobirise'
              className={styles.avatar}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
