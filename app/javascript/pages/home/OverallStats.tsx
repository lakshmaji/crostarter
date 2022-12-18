import Stat from '../../components/Stat/Stat';
import React from 'react';
import styles from './overall-stats.module.scss';

const OverallStats = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h4 className={styles.title}>Whats happening now?</h4>
        <div className={styles.list}>
          <Stat title='1,258,247' subtitle='amount contributed per year'>
            <svg className={styles.svg_8}>
              <g className={styles.g_9}>
                <path className={styles.path_10}></path>
                <path className={styles.path_11}></path>
                <path className={styles.path_12}></path>
                <path className={styles.path_13}></path>
                <path className={styles.path_14}></path>
                <path className={styles.path_15}></path>
                <path className={styles.path_16}></path>
                <path className={styles.path_17}></path>
                <path className={styles.path_18}></path>
                <path className={styles.path_19}></path>
                <path className={styles.path_20}></path>
                <path className={styles.path_21}></path>
                <path className={styles.path_22}></path>
                <path className={styles.path_23}></path>
                <path className={styles.path_24}></path>
                <path className={styles.path_25}></path>
              </g>
              <defs className={styles.defs_26}>
                <clipPath className={styles.clipPath_27}>
                  <rect className={styles.rect_28}></rect>
                </clipPath>
              </defs>
            </svg>
          </Stat>
          <Stat title='Over 220' subtitle='projects benefited'>
            <svg className={styles.svg_35}>
              <path className={styles.path_36}></path>
              <path className={styles.path_37}></path>
              <path className={styles.path_38}></path>
              <path className={styles.path_39}></path>
              <path className={styles.path_40}></path>
              <path className={styles.path_41}></path>
              <path className={styles.path_42}></path>
              <path className={styles.path_43}></path>
              <path className={styles.path_44}></path>
              <path className={styles.path_45}></path>
              <path className={styles.path_46}></path>
              <path className={styles.path_47}></path>
              <path className={styles.path_48}></path>
              <path className={styles.path_49}></path>
              <path className={styles.path_50}></path>
              <path className={styles.path_51}></path>
            </svg>
          </Stat>
          <Stat title='147,000' subtitle='Users and mentors'>
            <svg className={styles.svg_35}>
              <path className={styles.path_36}></path>
              <path className={styles.path_37}></path>
              <path className={styles.path_38}></path>
              <path className={styles.path_39}></path>
              <path className={styles.path_40}></path>
              <path className={styles.path_41}></path>
              <path className={styles.path_42}></path>
              <path className={styles.path_43}></path>
              <path className={styles.path_44}></path>
              <path className={styles.path_45}></path>
              <path className={styles.path_46}></path>
              <path className={styles.path_47}></path>
              <path className={styles.path_48}></path>
              <path className={styles.path_49}></path>
              <path className={styles.path_50}></path>
              <path className={styles.path_51}></path>
            </svg>
          </Stat>
        </div>
      </div>
    </section>
  );
};

export default OverallStats;
