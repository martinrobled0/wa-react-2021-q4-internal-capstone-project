import styled from "styled-components";

const ProductDetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .button-80 {
    background: #fff;
    backface-visibility: hidden;
    border-radius: 0.375rem;
    border-style: solid;
    border-width: 0.125rem;
    box-sizing: border-box;
    color: #212121;
    cursor: pointer;
    display: inline-block;
    font-family: Circular, Helvetica, sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.3;
    padding: 0.875rem 1.125rem;
    position: relative;
    text-align: left;
    text-decoration: none;
    transform: translateZ(0) scale(1);
    transition: transform 0.2s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-80:not(:disabled):hover {
    transform: scale(1.05);
  }

  .button-80:not(:disabled):hover:active {
    transform: scale(1.05) translateY(0.125rem);
  }

  .button-80:focus {
    outline: 0 solid transparent;
  }

  .button-80:focus:before {
    content: "";
    left: calc(-1 * 0.375rem);
    pointer-events: none;
    position: absolute;
    top: calc(-1 * 0.375rem);
    transition: border-radius;
    user-select: none;
  }

  .button-80:focus:not(:focus-visible) {
    outline: 0 solid transparent;
  }

  .button-80:focus:not(:focus-visible):before {
    border-width: 0;
  }

  .button-80:not(:disabled):active {
    transform: translateY(0.125rem);
  }
`;

const ProductDetailGallery = styled.div`
    width: 100%;
    display flex;
    justify-content: center;
    flex-direction: column;

    .title {
        font-size: 35px;
        color: #656d4a;
        font-weight: bold;
        margin-top: 30px;
        padding: 0px 60px;
        text-align: center;
        @media (max-width: 700px) {
            padding: 0;
          }
    }

    .price{
        font-size: 25px;
        color: #656d4a;
        font-weight: bold;
        margin-top: 30px;
        padding: 0px 60px;
        text-align: center;
        @media (max-width: 700px) {
            padding: 0;
          }
    }

    .sku{
        font-size: 25px;
        color: #656d4a;
        font-weight: bold;
        margin-top: 30px;
        padding: 0px 60px;
        text-align: center;
        @media (max-width: 700px) {
            padding: 0;
          }
    }

    .category{
        font-size: 25px;
        color: #656d4a;
        font-weight: bold;
        margin-top: 30px;
        padding: 0px 60px;
        text-align: center;
        @media (max-width: 700px) {
            padding: 0;
          }
    }

    .paragraph{
        padding: 0px 60px;
    }

    .cart{
        padding: 0px 60px;
        margin: 20px 0;
    }

    .specsTable{
        margin: 20px 60px;
        display: table;         
        width: auto;         
        background-color: #eee;         
        border: 1px solid #666666;         
        border-spacing: 5px;
    }

    .divRow
    {
        display: table-row;
        width: auto;
        clear: both;
    }

    .divCell
    {
        float: left; 
        display: table-column;         
        width: 50%;
        height:100%;       
        background-color: #ccc;  
    }
`;

const ProductDetailSlider = styled.div`
  padding: 50px;
  width: 700px;
  height: 700px;
  display: flex;
  justify-content: center;
  img {
    width: 700px;
  }
`;

const ProductDetailSliderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export {
  ProductDetailWrapper,
  ProductDetailGallery,
  ProductDetailSliderWrapper,
  ProductDetailSlider,
};
