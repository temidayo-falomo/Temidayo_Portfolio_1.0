import React from "react";

function ProjectCard({ data }) {
  return (
    <a href={data.link} target="_blank" rel="noopener noreferrer">
      <div
        className="card-top"
        style={{
          backgroundImage: `url(${data.img})`,
        }}
      ></div>
      <div className="card-desc">
        <h3>{data.name}</h3>
        <p>{data.desc}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
