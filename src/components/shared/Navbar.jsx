import React, { useState, useContext } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import Button from "../resuable/Button";
import { Link } from "react-router-dom";
import HireMeModel from "../../containers/HireMeModel";
import { ThemeContext } from "../../context/themeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [model, setModel] = useState(false);
  const [hireModel, setHireModel] = useState(false);
  const handleModel = () => {
    if (model == false) {
      setModel(true);
    } else {
      setModel(false);
    }
  };
  const handleTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className={`nav ${theme}`}>
      {/* for small screen size */}
      <div className="nav__item__small">
        <Link to="/">
          <div className="logo">&lt;Arpana/&gt;</div>
        </Link>
        <div className={`theme i${theme}`} onClick={handleTheme}>
          {theme == "light" ? <FiMoon /> : <FiSun />}
        </div>
        <div className={`menu ${theme}`} onClick={handleModel}>
          {model ? <FiX /> : <FiMenu />}
        </div>
      </div>
      {model && (
        <div className="nav__links__small">
          <Link className={`${theme}`} to="/project">
            Projects
          </Link>
          <div className={`line${theme}`}></div>
          <Link className={`${theme}`} to="/about">
            About Me
          </Link>
          <div className={`line${theme}`}></div>
          <Link className={`${theme}`} to="/contact">
            Contact
          </Link>
          <div className={`line${theme}`}></div>
          <Button
            title="Hire Me"
            btn="btn"
            onClick={() => setHireModel(true)}
          />
        </div>
      )}

      {/* for large screen size */}
      <div className="nav_container">
        <Link to="/">
          <div className="logo">&lt;Arpana/&gt;</div>
        </Link>
        <div className="nav__links__large">
          <Link className={`${theme}`} to="/project">
            Projects
          </Link>
          <Link className={`${theme}`} to="/about">
            About Me
          </Link>
          <Link className={`${theme}`} to="/contact">
            Contact
          </Link>
        </div>
        <div className="nav__item__large">
          <Button
            title="Hire Me"
            btn="btn"
            onClick={() => setHireModel(true)}
          />

          <div className={`theme icons i${theme}`} onClick={handleTheme}>
            {theme == "light" ? <FiMoon /> : <FiSun />}
          </div>
        </div>
      </div>
      {hireModel && <HireMeModel setHireModel={setHireModel} />}
    </div>
  );
};

export default Navbar;
