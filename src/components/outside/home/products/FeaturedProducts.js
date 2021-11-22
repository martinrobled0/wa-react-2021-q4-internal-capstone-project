import dataProducts from "../../../../mocks/en-us/featured-products.json";
import {
  FeaturedProductsWrapper,
  FeaturedProductsTitle,
  FeaturedProductsList,
} from "./FeacturedProducts.styled";
import { ProductCard } from "./ProductCard";

const { results } = dataProducts;

const goToProducts = () => {
  window.location.href = "product-list";
};

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
        <button className="viewAll" onClick={goToProducts}>
          View all products
        </button>
      </div>
    </FeaturedProductsWrapper>
  );
};
