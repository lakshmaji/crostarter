import { classNames } from '../../../utils/styles';
import React, { FC } from 'react';
import { IoDesktopOutline } from '@react-icons/all-files/io5/IoDesktopOutline';
import styles from './step-descriptor.module.scss';

interface Props {
  right?: boolean;
  color: string;
  title: string;
  subtitle: string;
}
const StepDescriptor: FC<Props> = ({ right = false, color, title, subtitle }) => {
  return (
    <div className={classNames(styles.container)}>
      <div
        className={styles.top}
        style={{
          ...(right && {
            flexDirection: 'row-reverse',
            marginRight: '-2rem',
          }),
          ...(!right && {
            marginLeft: '-2rem',
          }),
        }}
      >
        <div
          className={styles.icon}
          style={{
            background: color,
          }}
        >
          <IoDesktopOutline />
        </div>
        <span
          className={styles.title}
          style={{
            color,
          }}
        >
          {title}
        </span>
      </div>
      <div
        className={styles.bar}
        style={{
          borderBottom: `5px solid ${color}`,
        }}
      ></div>
      <div
        className={styles.bottom}
        style={{
          ...(right && {
            flexDirection: 'row-reverse',
          }),
        }}
      >
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default StepDescriptor;
