import React from "react";
import "./Projects.css";
import Navbar from "../../components/navbar/Navbar";
import InfoBar from "../../components/infoBar/InfoBar";
import ProjectsLanding from "../../components/projectsLanding/ProjectsLanding";
import Footer from "../../components/footer/Footer";

function Projects() {
  return (
    <div className="Projects">
      <div className="projects-top">
        <Navbar />
        {/* <InfoBar /> */}
      </div>
      <ProjectsLanding />
      <Footer />
    </div>
  );
}

export default Projects;
