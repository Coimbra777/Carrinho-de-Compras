import React, { useState, useContext } from "react";
import styled from "styled-components";

import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import AppContext from "../../Context/AppContext";

const StyledProducts = styled.section`
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 30px;
    padding: 150px 0;
  }
`;

const Products: React.FC = () => {
  const context = useContext(AppContext);

  const { products = [] } = context || {};
  const [loading] = useState(false);

  return (
    (loading && <Loading />) || (
      <StyledProducts>
        <section className="container products">
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </section>
      </StyledProducts>
    )
  );
};

export default Products;
