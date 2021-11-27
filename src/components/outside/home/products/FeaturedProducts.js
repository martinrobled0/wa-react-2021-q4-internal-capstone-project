import { Link } from "react-router-dom";
import dataProducts from "../../../../mocks/en-us/featured-products.json";
import {
  FeaturedProductsWrapper,
  FeaturedProductsTitle,
  FeaturedProductsList,
} from "./FeacturedProducts.styled";
import { ProductCard } from "./ProductCard";

const { results } = dataProducts;

export const FeaturedProducts = () => {
  return (
    <FeaturedProductsWrapper>
      <FeaturedProductsTitle>Featured Products</FeaturedProductsTitle>
      <FeaturedProductsList>
        {results.map((data) => (
          <ProductCard key={data.id} {...data.data} />
        ))}
      </FeaturedProductsList>
      <div className="buttonWrapper">
        <Link className="viewAll" to="/product-list">
          View all products
        </Link>
      </div>
    </FeaturedProductsWrapper>
  );
};
