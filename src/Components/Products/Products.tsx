import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import fetchProducts from "../../api/fetchProducts.js";
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

  if (!context) {
    throw new Error("Context not found");
  }

  const { products, setProducts } = context;
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetchProducts("iphone").then((response) => {
      setProducts(() => response);
      setLoading(false);
    });
  }, [setProducts]);

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
