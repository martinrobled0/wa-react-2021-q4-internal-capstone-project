import React from "react";
import { ShopAppWrapper } from "./ShopApp.styled";
import { Footer } from "./components/templates/Footer";
import { AppRouter } from "./router/AppRouter";
import { Header } from "./components/templates/Header";

export const ShopApp = () => {
  return (
    <ShopAppWrapper>
      <Header />
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
