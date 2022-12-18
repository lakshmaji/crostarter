import React, { FC, ReactNode } from 'react';
import styles from './stat.module.scss';

interface Props {
  children: ReactNode;
  title: string;
  subtitle: string;
}
const Stat: FC<Props> = ({ title, subtitle, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>{children}</div>
        <div className={styles.body}>
          <h2 className={styles.value}>{title}</h2>
          <h6 className={styles.description}>{subtitle}</h6>
        </div>
      </div>
    </div>
  );
};

export default Stat;
