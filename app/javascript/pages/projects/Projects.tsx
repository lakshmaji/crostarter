import React from 'react';
import type { FC } from 'react';
import { IProject } from '../../models/project';
import ProjectCard from './ProjectCard';
import styles from './projects.module.scss';
import Cat from '../categories/Cat';

interface Props {
  projects: IProject[];
  categories: any[];
}

const Projects: FC<Props> = ({ projects, categories }) => {
  return (
    <section>
      <div className={styles.cat_container}>
        <Cat items={categories} />
      </div>
      <div className={styles.container}>
        <div className={styles.list}>
          {projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
