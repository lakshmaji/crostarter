import React, { FC } from 'react'
import { IProject } from '../../models/project'
import './project-card.css'

interface Props {
    project: IProject
}

const ProjectCard: FC<Props> = ({project}) => {

  return (
    
  <div className="product">
    <div className="image-box">
      <div className="images" id="image-1"></div>
    </div>
    <div className="details">
      <h2 className="title">{project.title}</h2>
      <h3 className="goal">{project.funding_goal}</h3>
      <p className="description">{project.description}</p>
      <div>{project.details}</div>
    </div>
  </div>

  )
}

export default ProjectCard