import { useParams } from "react-router-dom";
import { useSearchProduct } from "../../../hooks/useSearchProduct";
import Pagination from "../../../utils/modules/Pagination/Pagination";
import { NoResults } from "../../NoResults/NoteResults";
import { ProductCard } from "../home/products/ProductCard";
import { SearchPageWrapper } from "./SearchPage.styled";

export const SearchPage = () => {
  let { q } = useParams();
  const { data } = useSearchProduct(q);
  const { results: products, results_size } = data;
  return (
    <>
      <SearchPageWrapper>
        <div className="title">Results:</div>
        {products && !results_size > 0 && <NoResults />}
        <div className="container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} id={product.id} {...product.data} />
            ))}
        </div>
      </SearchPageWrapper>
      {results_size > 0 && <Pagination />}
    </>
  );
};
