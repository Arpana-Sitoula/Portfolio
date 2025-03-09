import React,{useContext} from "react";

import Footer from "../components/shared/Footer";
import ProjectsSection from "../containers/ProjectsSection";
import Navbar from "../components/shared/Navbar";
import { ThemeContext } from "../context/themeContext";

const Project = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <Navbar />
      <div className="project">
        <ProjectsSection number={9}/>
      </div>
      <div className={`line${theme}`}></div>
      <div className="home__foot">
        <Footer />
      </div>
    </div>
  );
};

export default Project;
