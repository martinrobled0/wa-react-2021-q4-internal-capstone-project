/* eslint-disable no-unused-vars */

import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import Pagination from "../../../../utils/modules/Pagination/Pagination";
import { ProductCard } from "../ProductCard";
import { ProductListGridWrapped } from "./ProductListGrid.styled";

let PageSize = 20;
export const ProductListGrid = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentProductsDisplayed = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <ProductListGridWrapped>
      <div className="title">Products</div>
      <div className="container">
        {currentProductsDisplayed.map((product) => (
          <ProductCard key={product.id} id={product.id} {...product.data} />
        ))}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={products.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </ProductListGridWrapped>
  );
};

ProductListGrid.propTypes = {
  products: PropTypes.any,
};
