import React from "react";
import styled from "styled-components";
import CarrItem from "./CarrItem";

const StyledCarr = styled.section`
  .carr {
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
  }
`;

const Carr: React.FC = () => {
  return (
    <StyledCarr>
      <section className="carr">
        <div className="carr-itens">
          <CarrItem />
        </div>
        <div className="carr-resume">Resumo do carrinho</div>
      </section>
      ;
    </StyledCarr>
  );
};

export default Carr;
