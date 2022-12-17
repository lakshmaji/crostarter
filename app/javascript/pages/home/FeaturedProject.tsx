import React, { FC } from 'react';
import styles from './featured-project.module.scss';
import { IProject } from '../../models/project';
import { Link } from '@inertiajs/inertia-react';
import { IoChevronForwardCircle } from 'react-icons/io5';

interface Props {
  project: IProject;
  picture: string;
  bg: string;
}
const FeaturedProject: FC<Props> = ({ project, picture, bg }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.card}
        style={{
          background: bg,
        }}
      >
        <div className={styles.header}>
          <h6 className={styles.category}>{project.category?.name}</h6>
          <h5 className={styles.title}>{project.title}</h5>
        </div>
        <div className={styles.body}>
          <img src={picture} className={styles.picture} alt={project.title} />
        </div>
        <div className={styles.footer}>
          <div className={styles.content}>
            <div className={styles.navigation}>
              <Link href='/' className={styles.get_started}>
                Get Started
                <IoChevronForwardCircle className={styles.btn_icon} />
              </Link>
            </div>
            <p className={styles.funded}>12$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
