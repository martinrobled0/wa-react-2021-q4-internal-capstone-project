import { useParams } from "react-router-dom";
import { useSearchProduct } from "../../../hooks/useSearchProduct";
import { Pagination } from "../../../utils/modules/Pagination/Pagination";
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
        {!results_size > 0 && (
          <div className="noResults">
            <p>Sorry, products not found. Try again.</p>
            <img
              src="https://media2.giphy.com/media/KBYyUGgDEsILK/giphy.gif?cid=790b7611e631fa3dbecd0b6f4fa137f25bfb943b82c2c09e&rid=giphy.gif&ct=g"
              width="480"
              height="240"
            />
            <p></p>
          </div>
        )}
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
