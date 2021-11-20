import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  max-width: 600px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  background-color: #656d4a;
  margin: 0;
  padding: 0;

  .CardWrapper {
    &-title {
      height: 50px;
      font-size: 17px;
      color: #fff;
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;

      @media (min-width: 600px) {
        font-size: 20px;
      }

      @media (min-width: 1021px) {
        font-size: 30px;
      }
    }
  }

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    max-width: 600px;
  }
`;

export { CardWrapper };
