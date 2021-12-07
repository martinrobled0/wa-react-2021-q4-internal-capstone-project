import React from "react";
import ImageC from "../../../utils/modules/image/Image";
import { HomeWrapper } from "./Home.styled";
import banner from "./../../../utils/assets/forniture-banner.jpeg";
import { FeaturedBanners } from "./products/FeaturedBanners";
import { CategoriesGrid } from "./products/CategoriesGrid";
import { FeaturedProducts } from "./products/FeaturedProducts";

export const Home = () => {
  return (
    <HomeWrapper>
      <ImageC src={banner} width="100%" height="700" alt="banner" />
      <FeaturedBanners />
      <CategoriesGrid />
      <FeaturedProducts />
    </HomeWrapper>
  );
};
