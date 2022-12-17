import { IProject } from '../../models/project';
import React, { FC } from 'react';
import styles from './proje.module.scss';
import FeaturedProject from './FeaturedProject';

const IMAGES = [
  'https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features1.jpg',
  'https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features2.jpg',
  'https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features3.jpg',
];

const COLORS = [
  'rgb(255, 204, 1) none repeat scroll 0% 0% / auto padding-box border-box',
  'rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box',
  'rgb(168, 215, 65) none repeat scroll 0% 0% / auto padding-box border-box',
];
interface Props {
  trending_projects: IProject[];
}

const FeaturedProjects: FC<Props> = ({ trending_projects }) => {
  return (
    <section className={styles.SECTION_1}>
      <div className={styles.DIV_2}>
        <div className={styles.DIV_3}>
          <h4 className={styles.H4_4}>Trending projects</h4>
        </div>
        <div className={styles.DIV_5}>
          {trending_projects.map((project, index) => {
            return (
              <FeaturedProject
                project={project}
                key={project.id}
                picture={IMAGES[index]}
                bg={COLORS[index]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
