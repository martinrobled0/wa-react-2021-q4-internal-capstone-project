import styled from "styled-components";

const FeaturedProductsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  .buttonWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .viewAll {
    max-width: 180px;
    background-color: #6e4700;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    line-height: 20px;
    list-style: none;
    margin: 0;
    outline: none;
    padding: 10px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color 100ms;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .viewAll:hover,
  .viewAll:focus {
    background-color: #e1b564;
  }
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
