import { classNames } from '../../utils/styles';
import React, { FC } from 'react';
import { IoDesktopOutline } from 'react-icons/io5';
import styles from './bro.module.scss';

interface Props {
  right?: boolean;
  color: string;
}
const Bro: FC<Props> = ({ right = false, color }) => {
  return (
    <div className={classNames(styles.bcontainer, right ? styles.mirror : '')}>
      <div
        className={styles.icon}
        style={{
          background: color,
        }}
      >
        <IoDesktopOutline />
      </div>
      <div
        className={styles.bar}
        style={{
          borderBottom: `5px solid ${color}`,
        }}
      ></div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odio dicta eum ipsam modi,
        ea natus saepe vitae earum molestias fugiat, qui enim veniam cum culpa. Ducimus praesentium
        esse assumenda.
      </p>
    </div>
  );
};

export default Bro;
