import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ projectImg, projectName, projectCategory }) => {
  return (
    <Link className="card">
      <div className="card__image-container">
        <img
          className="card__image"
          src={projectImg}
        />
      </div>
      <div className="card__info-container">
        <h3 className="card__project-name">{projectName}</h3>
        <p className="card__project-category">{projectCategory}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
