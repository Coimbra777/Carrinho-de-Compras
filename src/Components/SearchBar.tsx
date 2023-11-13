import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const StyledSearchBar = styled.form`
  .search-bar {
    display: flex;
    width: 25rem;
    height: 3rem;
    background-color: #fff;
    justify-content: space-between;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  }

    .search-input {
      outline:none
      border: none;
      padding: 10px;
      flex: 1;
    }

    .search-button {
      border: none;
      background-color: #3498db;
      color: #fff;
      padding: 10px;
      cursor: pointer;
    }
`;

const SearchBar: React.FC = () => {
  const [value, setValue] = useState("");
  return (
    <StyledSearchBar>
      <div className="search-bar">
        <input
          type="search"
          value={value}
          placeholder="Buscar produtos"
          className="search-input"
          onChange={({ target }) => setValue(target.value)}
          required
        />
        <button type="submit" className="search-button">
          <BsSearch />
        </button>
      </div>
    </StyledSearchBar>
  );
};

export default SearchBar;
