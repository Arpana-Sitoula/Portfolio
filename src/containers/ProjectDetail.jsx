import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const ProjectDetail = () => {
  const location = useLocation();
  const project = location.state;

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <Navbar />
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
          <div className="project_type tools-used">
            {" "}
            <div className="project_type_title"> Tools & Technologies </div>
            <div>{project.tools}</div>
          </div>
        </div>
        <div className="div5">{project.description}</div>
      </div>
      <div className="home__foot">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;
