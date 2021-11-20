import styled from "styled-components";

const FeaturedProductsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FeaturedProductsTitle = styled.div`
    width:100%
    display: flex;
    justify-content: start;
    padding: 10px;
    color:#7f4f24;
    font-weight: bold;
    font-size:25px;
    margin-top:30px;
    padding: 0 60px
    `;

const FeaturedProductsList = styled.div`
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

  @media (min-width: 1120px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1420px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export { FeaturedProductsWrapper, FeaturedProductsTitle, FeaturedProductsList };
