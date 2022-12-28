import { InertiaLink } from '@inertiajs/inertia-react';
import { IProject } from 'app/javascript/models/project';
import React, { FC } from 'react';
import { classNames } from '../../../utils/styles';
import styles from './project-stats.module.scss';
import { IoTimer } from '@react-icons/all-files/io5/IoTimer';
import { IoGiftOutline } from '@react-icons/all-files/io5/IoGiftOutline';
import { IoLogoUsd } from '@react-icons/all-files/io5/IoLogoUsd';
import { IoAnalyticsSharp } from '@react-icons/all-files/io5/IoAnalyticsSharp';

interface Props {
  project: IProject;
}
const ProjectStatsEye: FC<Props> = ({ project }) => {
  return (
    <section className={classNames(styles.section)}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <div className={styles.content}>
              <h2>Metrics at a glance</h2>
              <p>{project.details}</p>
              <InertiaLink className={classNames(styles.btn_action, styles.btn_alt)} href='#'>
                Get report
              </InertiaLink>
            </div>
          </div>
          <div className={styles.metrics_list}>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <div className={styles.icon}>
                  <IoGiftOutline size={45} color='#fff' />
                </div>
                <div className={styles.note}>
                  <h4>Rewards</h4>
                  <p>
                    {project.rewards?.length
                      ? `${project.rewards?.length} rewards`
                      : 'Currently no rewards available'}
                  </p>
                </div>
              </div>
              <div className={styles.metric}>
                <div className={styles.icon}>
                  <IoAnalyticsSharp size={45} color='#fff' />
                </div>
                <div className={styles.note}>
                  <h4>Contributions</h4>
                  <p>{project.total_backers_count} members contributed, counting</p>
                </div>
              </div>
              <div className={styles.metric}>
                <div className={styles.icon}>
                  <IoLogoUsd size={45} color='#fff' />
                </div>
                <div className={styles.note}>
                  <h4>Funded</h4>
                  <p>{project.funded}$ raised</p>
                </div>
              </div>
              <div className={styles.metric}>
                <div className={styles.icon}>
                  <IoTimer size={45} color='#fff' />
                </div>
                <div className={styles.note}>
                  <h4>Time</h4>
                  <p>ends on {project.end_date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStatsEye;
