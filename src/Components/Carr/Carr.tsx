import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "../../Context/AppContext";
import CarrItem from "./CarrItem";
import FormatCurrency from "../../Context/utils/FormatCurrency";

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
`;

const Carr: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Context not found");
  }
  const { carrItems } = context;

  const totalPrice = carrItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <StyledCarr>
      <section className="carr">
        <div className="carr-itens">
          {carrItems.map((carrItem) => (
            <CarrItem key={carrItem.id} data={carrItem} />
          ))}
        </div>
        <div className="carr-resume">
          {FormatCurrency({ value: totalPrice, currency: "BRL" })}
        </div>
      </section>
      ;
    </StyledCarr>
  );
};

export default Carr;
