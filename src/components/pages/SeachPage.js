import { useParams } from "react-router-dom";
import { useSearchProduct } from "../../hooks/useSearchProduct";
import { NoResults } from "./NoteResults";
import { ProductCard } from "../elements/ProductCard";
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
      {results_size > 0 && <div></div>}
    </>
  );
};

// import { useParams } from "react-router-dom";
// import { useSearchProduct } from "../../hooks/useSearchProduct";
// // import Pagination from "../../utils/modules/Pagination/Pagination";
// import { NoResults } from "../NoResults/NoteResults";
// import { ProductCard } from "../home/products/ProductCard";
// import { SearchPageWrapper } from "./SearchPage.styled";
// import { useMemo, useState } from "react";
// import Pagination from "../../utils/modules/Pagination/Pagination";

// export const SearchPage = () => {
//   let { q } = useParams();
//   const { data } = useSearchProduct(q);
//   const { results: products, results_size, results_per_page } = data;

//   const [currentPage, setCurrentPage] = useState(1);

//   const currentResults = useMemo(() => {
//     if (products) {
//       const firstPageIndex = (currentPage - 1) * results_per_page;
//       const lastPageIndex = firstPageIndex + results_per_page;
//       return products.slice(firstPageIndex, lastPageIndex);
//     }
//   }, [currentPage]);

//   console.log(data);
//   console.log(results_size);

//   return (
//     <>
//       <SearchPageWrapper>
//         <div className="title">Results:</div>
//         {currentResults && !results_size > 0 && <NoResults />}
//         <div className="container">
//           {currentResults &&
//             currentResults.map((product) => (
//               <ProductCard key={product.id} id={product.id} {...product.data} />
//             ))}
//         </div>
//       </SearchPageWrapper>

//       <Pagination
//         className="pagination-bar"
//         currentPage={currentPage}
//         totalCount={results_size}
//         pageSize={results_per_page}
//         onPageChange={(page) => setCurrentPage(page)}
//       />
//     </>
//   );
// };
