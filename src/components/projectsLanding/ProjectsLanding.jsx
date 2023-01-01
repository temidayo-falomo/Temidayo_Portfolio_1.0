import React, { useEffect } from "react";
import "./ProjectsLanding.css";
import ProjectCard from "./ProjectCard";
import { projectData, projectList } from "./projectsData";
import Aos from "aos";
import "aos/dist/aos.css";

function ProjectsLanding() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="projectsLanding">
      <div className="projects-left">
        <h1 style={{ marginBottom: "2rem", color: "#43d9ad" }}>Github Links</h1>
        <ul>
          {projectList.map((proj, index) => {
            return (
              <li key={index}>
                <a href="#">{proj.name}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="projects-right">
        {projectData.map((data, index) => {
          return (
            <div key={index} className="product-card">
              <ProjectCard data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsLanding;
