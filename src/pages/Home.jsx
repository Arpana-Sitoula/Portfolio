import React, { useContext } from "react";
import Navbar from "../components/shared/Navbar";
import Landing from "../components/shared/Landing";
import Footer from "../components/shared/Footer";
import ProjectsSection from "../containers/ProjectsSection";
import Button from "../components/resuable/Button";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`home ${theme}`}>
      <div className="home__top">
        <Navbar />
      </div>
      <div className="home__body">
        <Landing />
      </div>
      <div className="home__project">
        <ProjectsSection />
        <Link to="/project">
          <div className="center-div">
            <Button title="More Projects" btn="btnlg" />
          </div>
        </Link>
      </div>
      <div className={`line${theme}`}></div>
      <div className="home__foot">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
