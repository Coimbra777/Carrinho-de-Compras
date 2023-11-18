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
  @media (max-width: 768px) {
    .products {
      display: grid;
      padding: 120px 20px;
    }
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
    const fetchData = async () => {
      try {
        const response = await fetchProducts("iphone");
        setProducts(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setProducts]);

  return loading ? (
    <Loading />
  ) : (
    <StyledProducts>
      <section className="container products">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    </StyledProducts>
  );
};

export default Products;
