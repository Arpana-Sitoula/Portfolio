import React from "react";
import img1 from "../assets/project/ui-planning.jpg";
import { Link, useLocation } from "react-router-dom";

const ProjectDetail = () => {
  const location = useLocation();
  const project = location.state;
  console.log({ project });
  return (
    <div>
      <div className="container-grid">
        <div className="title">
          {project.name}
          <div className="title_sub"> Jul 26, 2021 UI / Frontend</div>
        </div>
        <div className="div1">
          <img src={project.images[0]} width="100%" />
        </div>
        <div className="div2">
          <img src={project.images[1]} width="100%" />
        </div>
        <div className="div3">
          <img src={project.images[2]} width="100%" />
        </div>
        <div className="div4">
          <div className="project_type">
            {" "}
            <div className="project_type_title">About Project </div>
            <div>Name: {project.name}</div>
            <div>Service: {project.service}</div>
            <div>
              Link: <Link to={project.link}>{project.link}</Link>{" "}
            </div>
          </div>
          <div className="project_type">
            {" "}
            <div className="project_type_title"> Tools & Technologies </div>
            <div>{project.tools}</div>
          </div>
        </div>
        <div className="div5">{project.description}</div>
      </div>
    </div>
  );
};

export default ProjectDetail;
