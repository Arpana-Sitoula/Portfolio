import React from "react";

const SearchBox = () => {
  return (
    <form className="search-form">
      <input
        className="search-form__input"
        type="search"
        placeholder="Search Projects"
      />
    </form>
  );
};

export default SearchBox;
