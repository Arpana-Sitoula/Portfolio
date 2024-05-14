import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = ({ setSearchInput, handleSearch }) => {
  return (
    // <form className="search-form">
    <div className="search-field">
      <input
        className="search-field__input"
        type="text"
        onChange={e => setSearchInput(e.target.value)}
        placeholder="Search a project"
      />
      <button>
        <FaSearch className="search-icon" onClick={handleSearch} />
      </button>
    </div>
    // </form>
  );
};

export default SearchBox;
