import React from 'react';
import type { FC } from 'react';
import { IProject } from '../../models/project';
import ProjectCard from '../../features/projects/project/ProjectCard';
import styles from './projects.module.scss';
import Categories from '../../features/projects/category/Categories';
import { classNames } from '../../utils/styles';
import Pagination from '../../components/Pagination/Pagination';
import { ICategory } from '../../models/category';
import { IPagy } from '../../models/pagination';
import AppHead from '../../components/AppHead';
import NoProjects from '../../features/projects/empty/NoProjects';

interface Props {
  projects: IProject[];
  categories: ICategory[];
  pagy: IPagy;
}

const Projects: FC<Props> = ({ projects, categories, pagy }) => {
  return (
    <>
      <AppHead title='Home'>
        <meta
          name='description'
          content='Crostarter is a blackhole crowd funding application, where you can raise funds, invest in projects. This is a test application. Explore projects'
        />
      </AppHead>
      <section className={styles.section}>
        <div className={classNames(styles.container, styles.categories)}>
          <Categories items={categories} />
        </div>
        <div className={styles.container}>
          <div className={styles.list}>
            {projects.map((project) => {
              return <ProjectCard key={project.id} project={project} />;
            })}
          </div>
          {projects.length === 0 && <NoProjects />}
          <Pagination meta={pagy} />
        </div>
      </section>
    </>
  );
};

export default Projects;
