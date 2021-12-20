import styled from "styled-components";

const ProductCardWrapper = styled.div`
  width: 340px;
  height: 400px;
  transition: box-shadow 0.3s ease-in-out, top 0.3s ease-in-out;
  text-decoration: none;

  @media (max-width: 700px) {
    width: 100%;
    max-height: 400px;
  }
  .cardLink {
    text-decoration: none;
  }
  .product-card {
    text-decoration: none;
    &-image {
      width: 340px;
      height: 300px;
      @media (max-width: 700px) {
        width: 100%;
        max-width: 700px;
        max-height: 400px;

        min-width: 300px;
        min-height: 300px;
      }

      img {
        width: 340px;
        height: 300px;

        @media (max-width: 700px) {
          width: 100%;
          max-height: 400px;

          min-width: 300px;
          min-height: 300px;
        }
      }
    }

    &-details {
      height: 100px;
      background: #bd9e7661;
      width: 100%;
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    &-product {
      width: 50%;
      padding-left: 5px;
    }

    &-actions {
      display: flex;
      width: 50%;
      justify-content: end;
      padding: 5px;
      flex-direction: column;
      text-decoration: none;
    }

    &-button {
      max-width: 130px;
      width: 130px;
      max-height: 25px;
      background-color: #6e4700;
      border-radius: 3px;
      border-style: none;
      box-sizing: border-box;
      color: #ffffff;
      cursor: pointer;
      display: inline-block;
      text-align: center;
      margin-top: 5px;
      align-self: end;

      &:hover,
      &:focus {
        background-color: #e1b564;
      }
    }

    &-price {
      width: 100%;
      display: flex;
      justify-content: end;
      padding-right: 10px;
      color: #fefae0;
      font-size: 21px;
      font-weight: bold;
    }

    &-name {
      color: #414833;
      display: block;
      font-size: 1.2rem;
      font-weight: 400;
    }

    &-slug {
      color: #7f5539;
      display: block;
      font-size: 0.9rem;
      font-weight: 400;
    }
  }
`;

export { ProductCardWrapper };
