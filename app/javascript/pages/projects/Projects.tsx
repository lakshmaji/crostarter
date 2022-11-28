import React from "react";
import type { FC } from "react";
import { IProject } from "../../models/project";
import ProjectCard from "./ProjectCard";
import './projects.css'

interface Props {
    projects: IProject[]
}

const Projects: FC<Props> = ({projects}) => {
    
  return (
    <div className="listing-section">
        {
            projects.map(project => {
                return <ProjectCard key={project.id} project={project}  />
            })
        }
    </div>
  );
};

export default Projects;
