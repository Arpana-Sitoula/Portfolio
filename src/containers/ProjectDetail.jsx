import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { IoTimeOutline } from "react-icons/io5";
import { BsTags } from "react-icons/bs";

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
          <div className="title_sub">
            <div className="icons">
              <IoTimeOutline size={20}/>
              Jul 26, 2021
            </div>{" "}
            <div className="icons">
              <BsTags size={20}/>
              UI / Frontend
            </div>{" "}
          </div>
        </div>
        <div className="div1">
          <img
            src={project.images[0]}
            height={"360px"}
            width={"400px"}
            className="images"
          />
        </div>
        <div className="div2">
          <img
            src={project.images[1]}
            height={"360px"}
            width={"400px"}
            className="images"
          />
        </div>
        <div className="div3">
          <img
            src={project.images[2]}
            height={"360px"}
            width={"400px"}
            className="images"
          />
        </div>
        <div className="div4">
          <div className="project_type">
            {" "}
            <div className="project_type_title">About Project </div>
            <div>Name: {project.name}</div>
            <div>Service: {project.services}</div>
            <div>
              Link:{" "}
              {project.file ? (
                <a href={project.file} download={project.file}>
                  {project.name}
                </a>
              ) : (
                <a href={project.link} target="_blank">
                  {project.name}
                </a>
              )}
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
      <div className={`line${theme}`}></div>
      <div className="home__foot">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;
