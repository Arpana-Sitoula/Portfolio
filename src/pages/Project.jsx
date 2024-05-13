import React from "react";

import Footer from "../components/shared/Footer";
import ProjectsSection from "../containers/ProjectsSection";
import Navbar from "../components/shared/Navbar";


const Project = () => {
  return (
    <div>
      <Navbar />
      <div className="project">
        <ProjectsSection number={9}/>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
