import React, { FC } from 'react';
import styles from './recommended-project.module.scss';
import { IProject } from '../../../models/project';
import { IoChevronForwardCircle } from '@react-icons/all-files/io5/IoChevronForwardCircle';
import { Link } from '@inertiajs/inertia-react';

interface Props {
  project: IProject;
  picture: string;
}
const RecommendedProject: FC<Props> = ({ project, picture }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.body}>
          <img src={picture} className={styles.picture} alt={project.title} />
        </div>
        <div className={styles.header}>
          <h5 className={styles.title_wrapper}>
            <strong className={styles.title}>{project.title}</strong>
          </h5>
          <h6 className={styles.category}>{project.category?.name}</h6>
          <p className={styles.description}>{project.description}</p>
        </div>
        <div className={styles.footer}>
          <Link href='projects' className={styles.btn_link}>
            View
            <IoChevronForwardCircle className={styles.btn_icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecommendedProject;
