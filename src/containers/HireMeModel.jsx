import React from "react";
import { projects } from "../assets/projects.json";
import Dropdown from "../components/resuable/Dropdown";
import Button from "../components/resuable/Button";
import { VscChromeClose } from "react-icons/vsc";

const HireMeModel = ({ setHireModel }) => {
  return (
    <div className="overlay">
      <div className="  hireme">
        <div className="cancel" onClick={() => setHireModel(false)}>
          <VscChromeClose />
        </div>
        <div className="hireme__title">What Project are you looking for?</div>
        <div className="hireme__label">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
        </div>
        <Dropdown projects={projects} filter={null} setFilter={() => null} />
        <textarea
          style={{ height: "150px" }}
          placeholder="Project description"
        />
        <Button title="Send Request" btn="btnlg" />
        <Button title="Cancel" btn="btn" onClick={() => setHireModel(false)} />
      </div>
    </div>
  );
};

export default HireMeModel;
