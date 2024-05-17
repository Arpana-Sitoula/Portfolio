import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { ThemeContext } from "../../context/themeContext";

const SearchBox = ({ setSearchInput, handleSearch }) => {
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    // <form className="search-form">
    <div className={`search-field `}>
      <input
        className={`search-field__input ${theme}`}
        type="text"
        onChange={e => setSearchInput(e.target.value)}
        placeholder="Search a project"
      />
      <button className={`i${theme}`}>
        <CiSearch className="search-icon" size={24} onClick={handleSearch} />
      </button>
    </div>
    // </form>
  );
};

export default SearchBox;