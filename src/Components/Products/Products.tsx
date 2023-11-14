import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fetchProducts from "../../api/fetchProducts.js";
import ProductCard from "../ProductCard/ProductCard.js";

// tipagem de dados
interface Product {
  title: string;
}

const StyledProducts = styled.section`
  .products {
    padding: 150px 20px 50px;
  }
`;

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts("iphone").then((response) => {
      setProducts(response);
    });
  }, []);

  console.log(products);

  // const renderProducts = products.map((product) => (
  //   <h1 key={product.title}>{product.title}</h1>
  // ));

  return (
    <StyledProducts>
      <section className="container products">
        <ProductCard />
      </section>
    </StyledProducts>
  );
};

export default Products;
