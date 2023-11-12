import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const StyledSearchBar = styled.form`
  .search-bar {
    display: flex;
    background-color: #fff;
    width: 100%;
    max-width: 500px;
    justify-content: space-between;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);

    .search-input {
      /* Adicione os estilos do input aqui */
      border: none;
      padding: 10px;
      flex: 1;
    }

    .search-button {
      /* Adicione os estilos do botão aqui */
      border: none;
      background-color: #3498db;
      color: #fff;
      padding: 10px;
      cursor: pointer;
    }
  }
`;

const SearchBar: React.FC = () => {
  return (
    <StyledSearchBar>
      <div className="search-bar">
        <input
          type="search"
          placeholder="Buscar produtos"
          className="search-input"
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
