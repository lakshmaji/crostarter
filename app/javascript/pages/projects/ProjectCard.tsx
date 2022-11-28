import React, { FC } from 'react'
import { IProject } from '../../models/project'
import styles from "./project-card.module.scss";


interface Props {
    project: IProject
}

const ProjectCard: FC<Props> = ({project}) => {

  const numberWithCommas = (x) => (
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );

  const dateRemaining = (end_date: string) => {
    return end_date
  };

  const calculatePercent = () => (
    Math.floor(project.funded || 0 / project.funding_goal * 100)
  );

  return (
    
    <div className={styles.project}>
    {/* <Link to={`/projects/${props.project.id}`} className="project-img">
      <img className="img" src={props.project.project_img} />
    </Link> */}

    <div className={styles.description}>
      <div className={styles.category}>
        <h4>{project.category?.name}</h4>
      </div>
      <div className={styles['title-wrapper']}>
        <span className={styles.title}>
          {project.title}:
        </span>
        {' '}
        <span className={styles.modified}>
          {project.updated_at}
        </span>
      </div>

      <div className={styles.author}>
        <img src={ "https://sc01.alicdn.com/kf/UT8.CaXX2NXXXagOFbXC/fresh-navel-oranges.jpg" }
          alt="User icon" className={styles.avatar} />
        by: {' '}
        <span>{'project.creator'}</span>
      </div>
      {/* <Line percent={percent} strokeWidth="2" strokeColor="#2BDE73" /> */}
      <div className={styles.pledged}>
        $
        <span>{project.funding_goal}</span>
        <span className={styles.stats}>pledged</span>
      </div>
      <div className={styles.funded}>
        <span>{calculatePercent()}%</span>
        <span className={styles.stats}>funded</span>
      </div>
      <div className={styles.remaining}>
        <span>{dateRemaining(project.end_date)}</span>
        <span className={styles.stats}>days to go</span>
      </div>
    </div>
  </div>

  )
}

export default ProjectCard