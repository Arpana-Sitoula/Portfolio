import React, { useContext } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import avatar from "../assets/arpana.jpg";
import { ThemeContext } from "../context/themeContext";
const AboutMe = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <Navbar />
      <div className={`${theme}`}>
        <div className="aboutus">
          <div className="aboutus__img">
            <img src={avatar} height={"500px"} width={"500px"} alt="Arpana Sitoula" />
          </div>
          <div className="aboutus__desc">
            My journey started in software development, where I worked with JavaScript for 1.5 years. Over time, I found myself drawn more toward data and the insights it can uncover. That curiosity led me to pursue a master’s in Data Science at Hochschule Fulda, where I’m exploring machine learning, analytics, and how data can be used to solve real-world problems.
            <br />
            <br />
            Beyond academics and work, I care deeply about the world around me. Climate change is something that weighs on my mind, and I often find myself thinking about ways to contribute to a more sustainable future. It’s a path I hope to be a part of, in whatever way I can.
            <br />
            <br />
            I also have a deep love for animals and follow a vegan lifestyle. My home is shared with two cats and a dog, and I’m lucky to have a family that supports and shares my values. In my free time, I find comfort in painting—it’s a quiet space where I can slow down and express myself in a different way.
          </div>
        </div>
        
      </div>
      <div className={`line${theme}`}></div>
      <div className="home__foot">
        <Footer />
      </div>
    </div>
  );
};

export default AboutMe;
