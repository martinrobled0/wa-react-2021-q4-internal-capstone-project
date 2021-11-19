import styled from "styled-components";

const ProductsCategories = styled.div`
  width: 100%;
  background-color: #a4ac86;
  display: flex;
  flex-direction: column;
`;

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  padding: 50px 60px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1021px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProductsCategoriesTitle = styled.div`
    width:100%
    display: flex;
    justify-content: start;
    padding: 10px;
    color:#7f4f24;
    font-weight: bold;
    font-size:25px;
    margin-top:30px;
    padding:0px 60px;
`;

export { ProductsCategories, ProductsList, ProductsCategoriesTitle };
