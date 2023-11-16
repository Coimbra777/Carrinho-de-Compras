import React from "react";
import styled from "styled-components";
import { MdRemoveShoppingCart } from "react-icons/md";

const StyledCarrItem = styled.section`
  .carr-item-content {
    padding: 0 35px 0 10px;
    position: relative;
  }
  .carr-item {
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  .carr-item-image {
    width: 64px;
    height: auto;
    margin-right: 30px;
  }
  .carr-item-title {
    font-size: 18px;
    font-wight: 500;
    color: #7a797e;
    margin-bottom: 8px;
  }
  .carr-item-price {
    font-weight: 500;
    margin-bottom: 8px;
    font-size: 25px;
  }
  .carr-button-remove {
    position: absolute;
    right: 0;
    top: 0;
    color: #d83232;
    font-size: 1.25rem;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const CarrItem: React.FC = () => {
  return (
    <StyledCarrItem>
      <section className="carr-item">
        <img src="" alt="imagem do produto" className="carr-item-image" />
        <div className="carr-item-content">
          <h3 className="carr-item-title">titulo do produto</h3>
          <h3 className="carr-item-price">R$ 322, 00</h3>
          <button type="button" className="carr-button-remove">
            <MdRemoveShoppingCart />
          </button>
        </div>
      </section>
    </StyledCarrItem>
  );
};

export default CarrItem;
