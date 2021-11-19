import styled from "styled-components";

const TopBar = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: #582f0e;
  color: #fff;
`;

const ShopAppWrapper = styled.div`
  font-family: Georgia, serif;

  .content {
    display: flex;
    width: 100%;
  }
`;

const HeaderTitle = styled.div`
  width: 100%;
  color: #7f4f24;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 54px;
  max-height: 120px;
  height: 120px;
  font-weight: bold;
`;

const HeaderMenu = styled.div`
  border-top: 2px solid #936639;
  border-bottom: 2px solid #936639;
  max-height: 60px;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .items {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .searchSection {
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: start;
    padding-left: 15px;

    svg {
      border: 3px solid #a68a64;
      text-align: center;
      color: #fff;
      border-radius: 0 5px 5px 0;
      cursor: pointer;
      font-size: 20px;
      background-color: #a68a64;
    }
  }
`;

const SearchInput = styled.input.attrs(() => ({
  type: "search",
}))`
  width: 200px;
  color: 000;
  font-size: 1em;
  border: 3px solid #a68a64;
  border-right: none;
  padding: 5px;
  height: 36px;
  border-radius: 5px 0 0 5px;
  outline: none;
`;

export { TopBar, ShopAppWrapper, HeaderTitle, HeaderMenu, SearchInput };
