import { IProject } from '../../models/project';
import React, { FC, Suspense } from 'react';
import { classNames } from '../../utils/styles';
import styles from './project-details.module.scss';
import AppHead from '../../components/AppHead';
import RewardsSection from '../../features/project/rewards/RewardsSection';
import ProjectStatsEye from '../../features/project/stats/ProjectStatsEye';

const ProjectStats = React.lazy(() => import('../../features/project/chart/ProjectStats'));

interface Props {
  project: IProject;
}
const ProjectDetails: FC<Props> = ({ project }) => {
  return (
    <>
      <AppHead title='Home'>
        <meta
          name='description'
          content={`Crostarter is a blackhole crowd funding application, where you can raise funds, invest in projects. This is a test application. View ${project.title}`}
        />
      </AppHead>
      <section className={classNames(styles.section, styles.bg_white)}>
        <div className={styles.container}>
          <div className={styles.yd_flex}>
            <div className={styles.yd_flex_1}>
              <div className={styles.f_image}>
                <img className={styles.image} src={project.avatar_url} alt={project.title} />
              </div>
            </div>
            <div className={styles.yd_flex_2}>
              <h3 className={styles.subtitle}>{project.category?.name}</h3>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>
              <div>
                Visit:{' '}
                <a href={project.website} className={styles.contribute}>
                  {project.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectStatsEye project={project} />
      <section className={classNames(styles.section, styles.bg_white)}>
        <div className={styles.container}>
          <div className={styles.yd_flex}>
            <div className={styles.yd_flex_1}>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.description}>The contributions graph</p>
            </div>
            <div className={styles.yd_flex_2}>
              <Suspense fallback={<div>Loading insights...</div>}>
                <ProjectStats />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
      <RewardsSection project={project} />
    </>
  );
};

export default ProjectDetails;
