import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #414833;
  bottom: 0;

  .FooterWrapper {
    &-content {
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
      box-sizing: border-box;
      width: 100%;
      height: 100px;
      text-align: center;
      padding: 10px 50px;
      color: #fff;
    }
  }
`;

export { FooterWrapper };
