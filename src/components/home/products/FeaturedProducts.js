import { Link } from "react-router-dom";
import { useFeaturedProducts } from "../../../../hooks/useFeaturedProducts";
import {
  FeaturedProductsWrapper,
  FeaturedProductsTitle,
  FeaturedProductsList,
} from "./FeacturedProducts.styled";
import { ProductCard } from "./ProductCard";

export const FeaturedProducts = () => {
  const { data } = useFeaturedProducts();
  const { results } = data;
  return (
    <FeaturedProductsWrapper>
      <FeaturedProductsTitle>Featured Products</FeaturedProductsTitle>
      <FeaturedProductsList>
        {results &&
          results.map((data) => (
            <ProductCard key={data.id} id={data.id} {...data.data} />
          ))}
      </FeaturedProductsList>
      <div className="buttonWrapper">
        <Link className="viewAll" to="/products">
          View all products
        </Link>
      </div>
    </FeaturedProductsWrapper>
  );
};
