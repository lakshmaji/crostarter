import React from 'react';
import type { FC } from 'react';
import { IProject } from '../../models/project';
import ProjectCard from './ProjectCard';
import styles from './projects.module.scss';
import { classNames } from '../../utils/styles';

interface Props {
  projects: IProject[];
}

const Projects: FC<Props> = ({ projects }) => {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
