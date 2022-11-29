import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <h2>Crostarter</h2>
      <ul className={styles.items}>
        <li className={styles.item}>
          <a href='https://github.com/lakshmaji'>Github</a>
        </li>
        <li className={styles.item}>
          <a href='https://lakshmaji.medium.com/'>Medium</a>
        </li>
        <li className={styles.item}>
          <a href='https://dev.to/@lakshmaji'>Dev.to</a>
        </li>
        <li className={styles.item}>
          <a href='https://in.linkedin.com/in/lakshmajee'>LinkedIN</a>
        </li>
        <li className={styles.item}>
          <p>👋</p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
