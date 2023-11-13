// Header.tsx
import React from "react";
import styled from "styled-components";
import "../App.css";
import SearchBar from "./SearchBar";
import CarButton from "./CarButton";

const StyledHeader = styled.header`
  .header {
    background-color: #0f52ba;
    position: fixed;
    width: 100%;
  }
  .header > div {
    display: flex;
    justify-content: space-between;
    padding: 3rem 4rem;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <header className="header">
        <div className="container">
          <SearchBar />
          <CarButton />
        </div>
      </header>
    </StyledHeader>
  );
};

export default Header;
