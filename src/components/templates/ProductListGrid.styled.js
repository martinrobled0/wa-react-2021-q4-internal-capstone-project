import styled from "styled-components";

const ProductListGridWrapped = styled.div`
  float: left;
  width: 63%;

  .title {
    color: #656d4a;
    font-weight: bold;
    margin-top: 30px;
    padding: 0px 60px;
    text-align: center;
    @media (max-width: 700px) {
      padding: 0;
    }
  }

  .container {
    padding: 50px 60px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    @media (max-width: 700px) {
      padding: 0;
    }

    @media (min-width: 774px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export { ProductListGridWrapped };
