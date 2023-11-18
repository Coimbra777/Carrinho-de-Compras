// Header.tsx
import React from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import CarButton from "./CarButton";
import styled from "styled-components";

const StyledHeader = styled.header`
  .header {
    background-color: #0f52ba;
    position: fixed;
    width: 100%;
    z-index: 100;
  }
  .header > div {
    display: flex;
    justify-content: space-between;
    padding: 2rem 4rem;
  }

  @media (max-width: 768px) {
    .header > div {
      align-items: center;
      padding: 1.5rem;
    }
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
