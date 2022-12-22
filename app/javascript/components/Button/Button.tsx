import React, { FC } from 'react';
import styles from './button.module.scss';
import { IoChevronForwardCircle } from '@react-icons/all-files/io5/IoChevronForwardCircle';
import { Link } from '@inertiajs/inertia-react';
import { classNames } from '../../utils/styles';

interface Props {
  title: string;
  to?: string;
  right?: FC;
  primary?: boolean;
}
const Button: FC<Props> = ({ title, to, right: Right, primary }) => {
  const icon = Right ? <Right /> : <IoChevronForwardCircle className={styles.btn_icon} />;
  if (to) {
    return (
      <Link href={to} className={classNames(styles.btn, primary ? styles.primary : '')}>
        {/* <span className={styles.icon} > */}
        {/* </span> */}
        {title}
        {icon}
      </Link>
    );
  }
  return (
    <Link href='/projects' className={styles.btn}>
      {/* <span className={styles.icon} > */}
      {/* </span> */}
      {title}
      {icon}
    </Link>
  );
};

export default Button;
