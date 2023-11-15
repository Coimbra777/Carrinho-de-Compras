import React from "react";
import { BiLoaderAlt } from "react-icons/bi";
import styled from "styled-components";

const StyledLoading = styled.section`
  .loading {
    font-size: 2rem;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: spin 1s linear infinite;
    height: 100vh;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading: React.FC = () => {
  return (
    <StyledLoading>
      <section>
        <BiLoaderAlt className="loading" />
      </section>
    </StyledLoading>
  );
};

export default Loading;
