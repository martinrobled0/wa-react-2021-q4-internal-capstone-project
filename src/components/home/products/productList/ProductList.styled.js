import styled from "styled-components";

const ProductListContainer = styled.div`
  background: #eaeaed;
  clear: both;
  width: 100%;

  &:before,
  &:after {
    content: "";
    display: table;
  }
  &:after {
    clear: both;
  }

  @media (max-width: 700px) {
  }
`;

export { ProductListContainer };
