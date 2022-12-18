import React, { FC } from 'react';
import { IProject } from '../../models/project';
import styles from './project-card.module.scss';
import { IoChevronForwardCircle } from '@react-icons/all-files/io5/IoChevronForwardCircle';

interface Props {
  project: IProject;
}

const ProjectCard: FC<Props> = ({ project }) => {
  // const dateRemaining = () => {
  //   return project.end_date;
  // };

  const calculatePercent = () => Math.floor(project.funded || (0 / project.funding_goal) * 100);

  return (
    <div className={styles.project}>
      {/* <Link to={`/projects/${props.project.id}`} className="project-img">
      <img className="img" src={props.project.project_img} />
    </Link> */}

      <div className={styles.header}>
        <div className={styles.author}>
          <img
            src={'https://sc01.alicdn.com/kf/UT8.CaXX2NXXXagOFbXC/fresh-navel-oranges.jpg'}
            alt='User icon'
            className={styles.avatar}
          />
          <span>{'project.creator'}</span>
        </div>
        <h2 className={styles.title}>{project.title}</h2>
      </div>
      <div className={styles.project_image}>
        <img
          src='https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features1.jpg'
          alt='pro name'
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.computes}>
          <a href='/' className={styles.chip}>
            {project.category?.name}
          </a>
          <p className={styles.funded}>{calculatePercent()}% funded</p>
        </div>
        <div className={styles.eye}>
          <a href='/' className={styles.btn}>
            Contribute
            <IoChevronForwardCircle className={styles.btn_icon} />
          </a>
          <p className={styles.funded}>$7675</p>
        </div>
      </div>

      {/* <div className={styles.description}>
        <div className={styles.category}>
          <h4>{project.category?.name}</h4>
        </div>
        <div className={styles['title-wrapper']}>
          
          <span className={styles.modified}>{project.updated_at}</span>
        </div>
        <div className={styles.pledged}>
          $<span>{project.funding_goal}</span>
          <span className={styles.stats}>pledged</span>
        </div>
        <div className={styles.remaining}>
          <span>{dateRemaining(project.end_date)}</span>
          <span className={styles.stats}>days to go</span>
        </div>
        <Link href={`/projects/${project.id}`}>View</Link>
      </div> */}
    </div>
  );
};

export default ProjectCard;
