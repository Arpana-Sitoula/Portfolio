import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { useLocation,useNavigate } from 'react-router-dom';




const ProjectCard = ({project} ) => {
  const { id, image, name, category } = project;
  const { theme, setTheme } = useContext(ThemeContext);
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();

  const onClickHandler = () => {
    console.log("clicked")
    console.log({id})
    (navigate(`/project/${id}`), { state: id });
  };

  return (
    <Link className={`card i${theme}`} to={`/project/${id}`} state={project}>
      <div className="card__image-container">
        <img className="card__image" src={image} height={"360px"}/>
      </div>
      <div className="card__info-container">
        <h3 className={`card__project-name${theme}`}>{name}</h3>
        <p className={`card__project-category${theme}`}>{category}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
