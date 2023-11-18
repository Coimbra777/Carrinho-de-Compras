import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from "styled-components";
import AppContext from "../Context/AppContext";

const StyledCarButton = styled.div`
  .car-button {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 8px;
    cursor: pointer;
    background-color: #0d468e;
    border-radius: 50%;
    border: none;
  }
`;

const CarButton: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Context not found");
  }
  const { carrItems, carrVisible, setCarrVisible } = context;

  return (
    <StyledCarButton>
      <button
        type="button"
        className="car-button"
        onClick={() => {
          setCarrVisible(!carrVisible);
        }}
      >
        <AiOutlineShoppingCart />
        {carrItems?.length > 0 && <span>{carrItems.length}</span>}
      </button>
    </StyledCarButton>
  );
};

export default CarButton;
