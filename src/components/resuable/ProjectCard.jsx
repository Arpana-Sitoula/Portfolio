import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { useLocation,useNavigate } from 'react-router-dom';




const ProjectCard = ({ id, projectImg, projectName, projectCategory }) => {
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
    <div className="card" onClick={onClickHandler}>
      <div className="card__image-container">
        <img className="card__image" src={projectImg} height={"360px"}/>
        {console.log({projectImg})}
      </div>
      <div className="card__info-container">
        <h3 className={`card__project-name${theme}`}>{projectName}</h3>
        <p className={`card__project-category${theme}`}>{projectCategory}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
