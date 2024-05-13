import React, { useContext } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import avatar from "../assets/arpana.jpg";
import { ThemeContext } from "../context/themeContext";
const AboutMe = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const stats = [
    {
      number: "2+",
      type: "Years of experience",
    },
    {
      number: "120+",
      type: "Appreciations on Behance",
    },
    {
      number: "92%",
      type: "Positive feedback",
    },
    {
      number: "85%",
      type: "Project completed",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className={`${theme}`}>
        <div className="aboutus">
          <div className="aboutus__img">
            <img src={avatar} height={"300px"} width={"300px"} />
          </div>
          <div className="aboutus__desc">
            Hello there! I'm thrilled to have you visit my portfolio website.
            Let me introduce myself – I am a CSIT graduate from Mechi Multiple Campus in
            Bhadrapur, Jhapa. Ever since I can remember, I've had an insatiable
            curiosity for computer science and technology, which eventually led
            me to pursue this exciting field. However, as I grew older, I
            discovered a newfound passion for art and design. I delved into
            photoshop, digital illustration and UI/UX design.
            <br />
            <br />
            Surprisingly, my interests didn't end there; my exploration of
            coding piqued my curiosity, and I decided to venture into the realm
            of frontend development. I honed my skills in JavaScript, CSS, and
            ReactJS, and there's nothing quite like the satisfaction of crafting
            websites with custom CSS. I also have a strong inclination towards
            data and machine learning. I found myself quickly adapting to the
            world of data.
            <br />
            <br />
            Beyond the realm of programming, my love for movies and books knows
            no bounds. One of my all-time favorite films is "The Sixth Sense" .
            When I'm not absorbed in the world of technology or entertainment,
            you can often find me spending time with animals, as I'm a proud
            vegetarian and a fervent animal lover. I genuinely wish to make a
            positive impact on the environment and contribute to creating a
            better world for all living beings – both plants and animals.
          </div>
        </div>
        <div className={`stats${theme}`}>
          {stats.map((my) => (
            <div className="mystats">
              <div className="mystats__number">{my.number}</div>
              <div className="mystats__type">{my.type}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutMe;
