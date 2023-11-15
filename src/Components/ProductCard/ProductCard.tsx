import React from "react";
import styled from "styled-components";

const StyledCard = styled.section`
  .product-card {
    width: 100%;
    max-width: 300px;
    background-color: white;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;
  }

  .product-card:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .card-image {
    width: 100%;
  }
  .card-info {
    padding: 20px 0;
    border-top: 1px solid #ddd;
  }

  .card-price {
    font-size: 18px;
    display: block;
    font-weigth: 400;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.5);
  }

  .card-title {
    font-size: 24px;
  }

  .card-btn-add {
    background-color: #0f52ba;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
    padding: 10px;
    cursor: pointer;
    border: none;
  }

  .card-btn-add:hover {
    background-color: #0c467d;
  }
`;

interface ProductCardProps {
  data: {
    title: string;
    price: number;
    thumbnail?: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { title, price, thumbnail } = data;
  return (
    <StyledCard>
      <section className="product-card">
        {thumbnail && (
          <img
            src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
            alt="product"
            className="product-image"
          />
        )}

        <div className="card-info">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-price">
            {price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h2>
        </div>
        <button type="submit" className="card-btn-add">
          Adicionar
        </button>
      </section>
    </StyledCard>
  );
};

export default ProductCard;
