import React , {useContext} from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";


const ProjectCard = ({ projectImg, projectName, projectCategory }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Link className="card">
      <div className="card__image-container">
        <img
          className="card__image"
          src={projectImg}
        />
      </div>
      <div className="card__info-container">
        <h3 className={`card__project-name${theme}`}>{projectName}</h3>
        <p className={`card__project-category${theme}`}>{projectCategory}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
