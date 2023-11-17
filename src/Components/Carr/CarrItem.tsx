import React from "react";
import styled from "styled-components";
import { MdRemoveShoppingCart } from "react-icons/md";
import FormatCurrency from "../../Context/utils/FormatCurrency";

const StyledCarrItem = styled.section`
  .carr-item-content {
    padding: 0 30px 0 0;
    position: relative;
  }
  .carr-item {
    display: flex;
    align-items: flex-start;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }

  .carr-item-image {
    width: 64px;
    margin-right: 30px;
  }
  .carr-item-title {
    font-size: 18px;
    font-wight: 500;
    color: #7a797e;
    margin-bottom: 8px;
  }
  .carr-item-price {
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 20px;
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

interface CarrProps {
  data: {
    id: number;
    title: string;
    price: number;
    thumbnail?: string;
  };
}

const CarrItem: React.FC<CarrProps> = ({ data }) => {
  const { title, price, thumbnail } = data;

  return (
    <StyledCarrItem>
      <section className="carr-item">
        <img
          src={thumbnail}
          alt="imagem do produto"
          className="carr-item-image"
        />
        <div className="carr-item-content">
          <h3 className="carr-item-title">{title}</h3>
          <h2 className="carr-item-price">
            {FormatCurrency({ value: price, currency: "BRL" })}
          </h2>

          <button type="button" className="carr-button-remove">
            <MdRemoveShoppingCart />
          </button>
        </div>
      </section>
    </StyledCarrItem>
  );
};

export default CarrItem;
