import React from "react";
import darkDev from "../../assets/darkDev.svg";
import lightDev from "../../assets/lightDev.svg";
import { BsArrowDownCircle } from "react-icons/bs";

const Landing = ({ theme }) => {
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
                <BsArrowDownCircle /> Download CV{" "}
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
            <div className="lgLanding__body__content">
              <div className="lgLanding__body__content__head">Hi, I am Arpana</div>
              <div className="lgLanding__body__content__info">
                A frontend developer, designer & machine learning enthusiast
              </div>
              <div className="lgLanding__body__content__btn"><div className="dlBtn"><BsArrowDownCircle /> Download CV</div></div>
            </div>
            <div className="lgLanding__body__image">
              {theme == "light" ? (
                <img src={darkDev} width="200%" />
              ) : (
                <img src={lightDev} width="200%"/>
              )}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Landing;
