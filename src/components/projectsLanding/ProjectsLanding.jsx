import React from "react";
import "./ProjectsLanding.css";
import ProjectCard from "./ProjectCard";
import { projectData, projectList } from "./projectsData";

function ProjectsLanding() {
  return (
    <div className="projectsLanding">
      <div className="projects-left">
        <h1 style={{marginBottom: '2rem', color: '#43d9ad'}}>Github Links</h1>
        <ul>
          {projectList.map((proj) => {
            return (
              <li key={proj.name}>
                <a href="#">{proj.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      
      <div className="projects-right">
        {projectData.map((data)=> {
          return <ProjectCard key={data.id} data={data}/>
        })}
      </div>
    </div>
  );
}

export default ProjectsLanding;
