import React from "react";
import {
  TopBar,
  ShopAppWrapper,
  HeaderTitle,
  HeaderMenu,
  SearchInput,
} from "./ShopApp.styled";
import { BrowserRouter as Router, Link } from "react-router-dom";
import carIcon from "./utils/assets/shopping-car.json";
import searchIcon from "./utils/assets/search-icon.json";
import Icon from "./utils/modules/Icon";
import { Footer } from "./components/outside/footer/Footer";
import { AppRouter } from "./router/AppRouter";

export const ShopApp = () => {
  return (
    <Router>
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
              <SearchInput placeholder="Search ...." />
              <Icon
                src={searchIcon.d}
                name={"search-icon"}
                width="32px"
                height="32px"
                fill="#fff"
                viewbox={"0 0 24 24"}
              />
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
    </Router>
  );
};

export default ShopApp;
