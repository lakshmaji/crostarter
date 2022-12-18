import React from 'react';
import styles from './button.module.scss';
import { IoChevronForwardCircle } from '@react-icons/all-files/io5/IoChevronForwardCircle';
import { Link } from '@inertiajs/inertia-react';

const Button = () => {
  return (
    <Link href='/projects' className={styles.btn}>
      {/* <span className={styles.icon} > */}
      {/* </span> */}
      Get Started
      <IoChevronForwardCircle className={styles.btn_icon} />
    </Link>
  );
};

export default Button;
