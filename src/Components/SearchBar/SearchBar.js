import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar () {
  const [searchbar, setsearchbar] = useState("searchbar");

  return (
    <div className="search">
      <div className="searchContainer">
        <h3 className="titleSearch">What type of vehicle are you interested in?</h3>
      </div>
      <input
        type="text"
        className="inventory_search"
        placeholder="Search our inventory"
      />
      <SearchIcon className="search_icon" />
      <span>Search</span>
    </div>
  );
}

export default SearchBar;
