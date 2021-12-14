/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import { useProductCategories } from "../../hooks/useProductCategories";
import { useFilterProducts } from "../../hooks/useFilterProducts";
import { Loader } from "../../utils/modules/loader/Loader";
import { ProductListContainer } from "./ProductList.styled";
import { ProductListGrid } from "./ProductListGrid";
import { ProductSideBar } from "./ProductSideBar";

export const ProductList = () => {
  const { data: categoriesList } = useProductCategories();
  const { results } = categoriesList;
  const [categories, setCategory] = useState([]);

  const products = useFilterProducts(categories);
  const showProductsList = !products?.isLoading;

  return (
    <>
      <ProductListContainer>
        {showProductsList ? (
          <ProductListGrid products={products.data.results} />
        ) : (
          <Loader />
        )}
        <ProductSideBar
          results={results}
          categories={categories}
          setCategory={setCategory}
        />
      </ProductListContainer>
    </>
  );
};
