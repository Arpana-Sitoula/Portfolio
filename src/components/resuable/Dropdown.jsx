import React, { useRef, useState } from "react";

const Dropdown = ({ projects, filter, setFilter }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const options = useRef(["All Projects"]);

  projects.forEach((project) => {
    const { category } = project;

    if (!options.current.includes(category)) {
      options.current.push(category);
    }
  });

  return (
    <div className="dropdown" onClick={() => setShowDropdown((prev) => !prev)}>
      <div className="dropdown__btn">{filter}</div>
      {showDropdown ? (
        <>
          <div className="dropdown__overlay" />
          <div className="dropdown__list">
            {options.current.map((option, index) => (
              <div
                key={index}
                className="dropdown__option"
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
