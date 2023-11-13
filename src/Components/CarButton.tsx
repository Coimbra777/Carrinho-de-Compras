import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from "styled-components";

const StyledCarButton = styled.button`
  .car-button {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    border: none;
    position: relative;
  }
`;

const CarButton: React.FC = () => {
  const [itensCar, setItensCar] = useState(0);

  const adicionarItem = () => {
    setItensCar(itensCar + 1);
  };
  return (
    <StyledCarButton>
      <button type="button" className="car-button" onClick={adicionarItem}>
        <AiOutlineShoppingCart />
        <span>{itensCar}</span>
      </button>
    </StyledCarButton>
  );
};

export default CarButton;
