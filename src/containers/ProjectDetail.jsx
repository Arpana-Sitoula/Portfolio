import React from "react";
import img1 from "../assets/project/ui-planning.jpg";

const ProjectDetail = () => {
 // console.log({ key }, { projectName });
  return (
    <div>
      <div className="container-grid">
        <div className="title">
          {projectName}
          <div className="title_sub"> Jul 26, 2021 UI / Frontend</div>
        </div>
        <div className="div1">
          <img src={img1} width="100%" />
        </div>
        <div className="div2">
          <img src={img1} width="100%" />
        </div>
        <div className="div3">
          <img src={img1} width="100%" />
        </div>
        <div className="div4">
          <div className="project_type">
            {" "}
            <div className="project_type_title">About Project </div>
            <div>Name:</div>
            <div>Service:</div>
            <div>Link:</div>
          </div>
          <div className="project_type">
            {" "}
            <div className="project_type_title"> Tools & Technologies </div>
            <div>HTML, CSS, ReactJs</div>
          </div>
        </div>
        <div className="div5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel
          illum asperiores dignissimos cumque quibusdam et fugiat voluptatem
          nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi
          corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Incidunt totam dolorum, ducimus
          obcaecati, voluptas facilis molestias nobis ut quam natus similique
          inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo
          necessitatibus perspiciatis! Aperiam perferendis labore temporibus,
          eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit
          libero tenetur neque consequatur ea. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Nihil vel illum asperiores dignissimos
          cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque
          consequatur nesciunt, fugit eligendi corporis laudantium adipisci
          soluta? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat
          voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit
          eligendi corporis laudantium adipisci soluta?
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
