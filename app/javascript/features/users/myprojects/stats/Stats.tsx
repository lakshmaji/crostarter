import React from 'react';
import styles from './stats.module.scss';
import { IoArrowUpOutline } from '@react-icons/all-files/io5/IoArrowUpOutline';
import { IoCaretDown } from '@react-icons/all-files/io5/IoCaretDown';
import { IoCaretUp } from '@react-icons/all-files/io5/IoCaretUp';

const Stats = () => {
  return (
    <ul className={styles.card}>
      <li>
        <p></p>
        <h3>53</h3>
        <IoCaretUp size={20} className={styles.clr_up} />
        <p />
        <span>Websites Added</span>
      </li>
      <li>
        <p></p>
        <h3>18</h3>
        <IoCaretDown size={20} className={styles.clr_down} />
        <p />
        <span>Websites Dropped</span>
      </li>
      <li>
        <p></p>
        <h3>9,526</h3>
        <IoArrowUpOutline className={styles.arrow_top} />
        <p />
        <span>Current Websites</span>
      </li>
      <li>
        <p></p>
        <h3>6.90%</h3>
        <IoArrowUpOutline className={styles.arrow_top} />
        <p />
        <span>Market Share</span>
      </li>
    </ul>
  );
};

export default Stats;
