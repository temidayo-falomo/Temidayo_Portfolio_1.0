import React from "react";
import "./ProjectsLanding.css";
import Carousel from "react-elastic-carousel";
import ProductCard from "./ProjectCard";
import { projectData, projectList } from "./projectsData";

function ProjectsLanding() {
  return (
    <div className="projectsLanding">
      <div className="projects-left">
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
          return <ProductCard key={data.id} data={data}/>
        })}
      </div>
    </div>
  );
}

export default ProjectsLanding;
