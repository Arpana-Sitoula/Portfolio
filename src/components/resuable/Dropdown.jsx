import React, { useRef, useState, useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Dropdown = ({ projects, filter, setFilter }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const options = useRef(["All Projects"]);

  projects.forEach((project) => {
    const { category } = project;

    if (!options.current.includes(category)) {
      options.current.push(category);
    }
  });

  return (
    <div className="dropdown" onClick={() => setShowDropdown((prev) => !prev)}>
      <div className="dropdown__btn">
        {filter}
        {showDropdown ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </div>
      {showDropdown ? (
        <>
          <div className="dropdown__overlay" />
          <div className={`dropdown__list ${theme}`}>
            {options.current.map((option, index) => (
              <div
                key={index}
                className={`dropdown__option ${theme}`}
                onClick={() => setFilter(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Dropdown;
