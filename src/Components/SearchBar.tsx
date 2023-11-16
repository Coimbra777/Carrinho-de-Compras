import React, { useState, FormEvent, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import fetchProducts from "../api/fetchProducts";
import AppContext from "../Context/AppContext";

const StyledSearchBar = styled.div`
  .search-bar {
    display: flex;
    width: 25rem;
    height: 3rem;
    background-color: #fff;
    justify-content: space-between;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  }

  .search-input {
    outline: none;
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
  const { setProducts } = useContext(AppContext);

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();
    const products = await fetchProducts(value);
    setProducts(products);
    setValue("");
  };

  return (
    <StyledSearchBar>
      <form className="search-bar" onSubmit={handleSearch}>
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
      </form>
    </StyledSearchBar>
  );
};

export default SearchBar;
