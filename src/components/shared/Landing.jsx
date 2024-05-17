import React, { useContext } from "react";
import darkDev from "../../assets/darkDev.svg";
import lightDev from "../../assets/lightDev.svg";
import { BsArrowDownCircle } from "react-icons/bs";
import resume from "../../assets/Arpana_resume.pdf";
import { ThemeContext } from "../../context/themeContext";

const Landing = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <div className="center-div">
        {/* for small screen size */}
        <div className="landing">
          <div className="landing__body">
            <div className="landing__body__head">Hi, I am Arpana</div>
            <div className="landing__body__info">
              A frontend developer, designer & machine learning enthusiast
            </div>
            <button className="landing__body__btn">
              <div className="dlBtn">
                <BsArrowDownCircle />
                <a href={resume} download="Arpana_CV.pdf">
                  Download CV
                </a>
              </div>
            </button>
          </div>
          <div>
            {theme == "light" ? <img src={darkDev} /> : <img src={lightDev} />}
          </div>
        </div>
        {/* for large screen size */}
      </div>
      <div className="lgLanding">
        <div className="lgLanding__body">
          <div className="lgLanding__body__content animate-fade-out">
            <div className="lgLanding__body__content__head">
              Hi, I am Arpana
            </div>
            <div className={`lgLanding__body__content__info ${theme}Txt`}>
              A frontend developer, designer & machine learning enthusiast
            </div>
            <div className="lgLanding__body__content__btn">
              <div className="dlBtn">
                <BsArrowDownCircle />
                <div><a href={resume} download="Arpana_resume.pdf">
                  Download CV
                </a></div>
              </div>
            </div>
          </div>
          <div className="lgLanding__body__image animate-pop-in">
            {theme == "light" ? (
              <img src={darkDev} width="180%" />
            ) : (
              <img src={lightDev} width="180%" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
