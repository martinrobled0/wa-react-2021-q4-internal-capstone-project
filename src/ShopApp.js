import React, { useState } from "react";
import {
  TopBar,
  ShopAppWrapper,
  HeaderTitle,
  HeaderMenu,
  SearchInput,
} from "./ShopApp.styled";
import { Link, useNavigate } from "react-router-dom";
import carIcon from "./utils/assets/shopping-car.json";
import searchIcon from "./utils/assets/search-icon.json";
import Icon from "./utils/modules/Icon";
import { Footer } from "./components/outside/footer/Footer";
import { AppRouter } from "./router/AppRouter";

export const ShopApp = () => {
  const [searchValue, setSearchValue] = useState("");
  const history = useNavigate();

  const goToSearch = () => {
    history(`/search/${searchValue}`);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      history(`/search/${searchValue}`);
    }
  };

  return (
    <ShopAppWrapper>
      <div className="Header">
        <TopBar>
          <span>The Best Ecommerce Store</span>
        </TopBar>
        <HeaderTitle>
          <Link to="/">Muebles Troncoso</Link>
        </HeaderTitle>
        <HeaderMenu>
          <div className="searchSection">
            <SearchInput
              value={searchValue}
              onKeyUp={handleEnter}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search ...."
            />
            <span onClick={goToSearch}>
              <Icon
                src={searchIcon.d}
                name={"search-icon"}
                width="32px"
                height="32px"
                fill="#fff"
                viewbox={"0 0 24 24"}
              />
            </span>
          </div>

          <div className="items">
            <Icon
              src={carIcon.d}
              viewbox={"0 0 512 512"}
              fill="#a68a64"
              width="40px"
              height="40px"
            />
          </div>
        </HeaderMenu>
      </div>
      <div className="content">
        <AppRouter />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </ShopAppWrapper>
  );
};

export default ShopApp;
