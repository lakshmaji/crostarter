import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <a href="mailto:lakshmajim@gmail.com">Email</a>
        </li>
        <li className={styles.item}>
          <a href="https://github.com/lakshmaji">Github</a>
        </li>
        <li className={styles.item}>
          <a href="https://lakshmaji.medium.com/">Medium</a>
        </li>
        <li className={styles.item}>
          <a href="https://dev.to/@lakshmaji">Dev.to</a>
        </li>
        <li className={styles.item}>
          <p>👋</p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
