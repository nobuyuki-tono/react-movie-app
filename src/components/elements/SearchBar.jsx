import React, { useState, useRef } from "react";
import {
  StyledSearchBar,
  StyledSearchBarContent
} from "../styles/StyledSearchBar";
import PropTypes from "prop-types";

import FontAwesome from "react-fontawesome";

const SearchBar = ({ callBack }) => {
  const [state, setState] = useState("");
  const timeOut = useRef(null);

  const doSearch = e => {
    clearTimeout(timeOut.current);

    setState(e.target.value);

    const value = e.target.value;

    timeOut.current = setTimeout(() => {
      callBack(value);
    }, 500);
  };

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <FontAwesome className="fa-search" name="search" size="2x" />
        <input
          type="text"
          placeholder="Search movie..."
          onChange={doSearch}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  callBack: PropTypes.func
};

export default SearchBar;
