import { classNames } from '../../../utils/styles';
import React, { FC } from 'react';
import styles from './projects.module.scss';
import Banana from './Banana';
import { IoCreateOutline } from '@react-icons/all-files/io5/IoCreateOutline';
import { IoTrashOutline } from '@react-icons/all-files/io5/IoTrashOutline';
import { IProject } from '../../../models/project';
import { Inertia } from '@inertiajs/inertia';

interface Props {
  projects: IProject[];
}
const Projects: FC<Props> = ({ projects }) => {
  const onDelete = (project: IProject) => {
    Inertia.delete(`/projects/${project.id}`, {
      onBefore: () => confirm(`Are you sure you want to delete ${project.title} project?`),
    });
  };
  return (
    <div className={styles.container}>
      <div className={classNames(styles.row, styles.row__top_40)}>
        <div className={styles.col_md_12}>
          <h2 className={styles.row__title}>Projects ({projects.length})</h2>
        </div>
      </div>
      <div className={classNames(styles.row, styles.row__top_20)}>
        <div className={styles.col_md_12}>
          <div className={styles.table_container}>
            <table className={styles.table}>
              <thead className={styles.table__thead}>
                <tr>
                  <th className={styles.table__th}>Name</th>
                  <th className={styles.table__th}>Goal</th>
                  <th className={styles.table__th}>End date</th>
                  <th className={styles.table__th}>Location</th>
                  <th className={styles.table__th}>Status</th>
                  <th className={styles.table__th}>Raised</th>
                  <th className={styles.table__th} />
                  <th className={styles.table__th} />
                </tr>
              </thead>
              <tbody className={styles.table__tbody}>
                {projects.map((project) => {
                  return (
                    <tr
                      className={classNames(styles.table_row, styles.table_row__chris)}
                      key={project.id}
                    >
                      <td className={styles.table_row__td}>
                        <img
                          src='https://avatars.githubusercontent.com/u/14037682?v=4'
                          alt='app'
                          className={styles.table_row__img}
                        />

                        <div className={styles.table_row__info}>
                          <p className={styles.table_row__name}>{project.title}</p>
                          <span className={styles.table_row__small}>{project.website}</span>
                        </div>
                      </td>
                      <td data-column='Policy' className={styles.table_row__td}>
                        <div>
                          <p className={styles.table_row__policy}>{project.funding_goal}</p>
                          <span className={styles.table_row__small}>{project.category?.name}</span>
                        </div>
                      </td>
                      <td data-column='Policy status' className={styles.table_row__td}>
                        <p
                          className={classNames(
                            styles.table_row__p_status,
                            styles.status__green,
                            styles.status,
                          )}
                        >
                          {project.end_date}
                        </p>
                      </td>
                      <td data-column='Destination' className={styles.table_row__td}>
                        {'project.location'}
                      </td>
                      <td data-column='Status' className={styles.table_row__td}>
                        <p
                          className={classNames(
                            styles.table_row__status,
                            styles.status__green,
                            styles.status,
                          )}
                        >
                          Active
                        </p>
                      </td>
                      <td data-column='Progress' className={styles.table_row__td}>
                        <p
                          className={classNames(
                            styles.table_row__progress,
                            styles.status__blue,
                            styles.status,
                          )}
                        >
                          {project.funded || 0}
                        </p>
                      </td>
                      <td className={styles.table_row__td}>
                        <IoCreateOutline size={24} className={styles.table_row__edit} />
                      </td>
                      <td className={styles.table_row__td}>
                        <IoTrashOutline
                          size={24}
                          className={styles.table_row__edit}
                          onClick={() => onDelete(project)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Banana />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
