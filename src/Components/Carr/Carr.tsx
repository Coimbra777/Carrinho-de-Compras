import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "../../Context/AppContext";
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
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Context not found");
  }
  const { carrItems } = context;

  return (
    <StyledCarr>
      <section className="carr">
        <div className="carr-itens">
          {carrItems.map((carrItem) => (
            <CarrItem key={carrItem.id} data={carrItem} />
          ))}
        </div>
        <div className="carr-resume">Resumo do carrinho</div>
      </section>
      ;
    </StyledCarr>
  );
};

export default Carr;
