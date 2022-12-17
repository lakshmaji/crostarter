import React, { FC } from 'react';
import styles from './rec.module.scss';
import { IProject } from '../../models/project';
import RecommendedProject from './RecommendedProject';

const IMAGES = [
  'https://mobirise.com/extensions/toolm5/illustration-design/assets/images/team1.jpg',
  'https://mobirise.com/extensions/toolm5/illustration-design/assets/images/team2.jpg',
  'https://mobirise.com/extensions/toolm5/illustration-design/assets/images/team3.jpg',
];

interface Props {
  recommended_projects: IProject[];
}

const RecommendedProjects: FC<Props> = ({ recommended_projects }) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h4 className={styles.title}>Recommended Projects</h4>
          <h5 className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h5>
        </div>
        <div className={styles.list}>
          {recommended_projects.map((project, index) => {
            return (
              <RecommendedProject project={project} key={project.id} picture={IMAGES[index]} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecommendedProjects;
