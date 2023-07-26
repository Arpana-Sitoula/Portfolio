import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const AboutMe = () => {
  const stats = [
    {
      number:'12',
      type:'Years of experience',
    },
    {
      number:'20K+',
      type:'Stars on GitHub',
    },
    {
      number:'92%',
      type:'Positive feedback',
    },
    {
      number:'77%',
      type:'Project completed',
    }
  ]
  return (
    <div>
      <Navbar />
      <div>
        <div className="aboutus">
          <div className="aboutus__img">
            <img
              src="https://react-tailwindcss-portfolio.netlify.app/static/media/profile.bbe2eb2e.jpeg"
              height={"300px"}
              width={"300px"}
            />
          </div>
          <div className="aboutus__desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel
            illum asperiores dignissimos cumque quibusdam et fugiat voluptatem
            nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi
            corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Incidunt totam dolorum, ducimus
            obcaecati, voluptas facilis molestias nobis ut quam natus similique
            inventore excepturi optio ipsa deleniti fugit illo. Unde, amet!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo
            necessitatibus perspiciatis! Aperiam perferendis labore temporibus,
            eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit
            libero tenetur neque consequatur ea. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Nihil vel illum asperiores dignissimos
            cumque quibusdam et fugiat voluptatem nobis suscipit explicabo,
            eaque consequatur nesciunt, fugit eligendi corporis laudantium
            adipisci soluta?
          </div>
        </div>
        <div className="stats">
        {
          stats.map((my)=> (
            <div className="mystats">
              <div className="mystats__number">{my.number}</div>
              <div className="mystats__type">{my.type}</div>
            </div>
          ))
        }

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutMe;
