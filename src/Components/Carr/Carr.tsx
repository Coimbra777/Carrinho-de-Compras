import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "../../Context/AppContext";
import CarrItem from "./CarrItem";
import FormatCurrency from "../../utils/FormatCurrency";

const StyledCarr = styled.section`
  .carr {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 330px;
    background-color: white;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    padding: 130px 20px;
    transform: translate(110%, 0);
  }
  .carr-itens {
    flex-grow: 1;
    overflow: auto;
  }
  .carr-resume {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 35px 0 15px;
    border-top: 1px solid #ddd;
  }
  .carr-active {
    transform: translate(0, 0);
  }
`;

const Carr: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Context not found");
  }
  const { carrItems, carrVisible } = context;

  const totalPrice = carrItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <StyledCarr>
      <section className={`carr ${carrVisible ? "carr-active" : ""} `}>
        <div className="carr-itens">
          {carrItems.map((carrItem, index) => (
            <CarrItem key={index} data={carrItem} />
          ))}
        </div>
        <div className="carr-resume">
          {FormatCurrency({ value: totalPrice, currency: "BRL" })}
        </div>
      </section>
    </StyledCarr>
  );
};

export default Carr;
