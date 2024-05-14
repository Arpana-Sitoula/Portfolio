import React from "react";
import { CiSearch } from "react-icons/ci";

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
        <CiSearch className="search-icon" size={24} onClick={handleSearch} />
      </button>
    </div>
    // </form>
  );
};

export default SearchBox;