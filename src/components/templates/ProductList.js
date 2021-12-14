/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import { useProductCategories } from "../../hooks/useProductCategories";
import { useProductsBycategoryId } from "../../hooks/useProductsByCategoryId";
import { useProductsGrid } from "../../hooks/useProductsGrid";
import { getProductsByCategoryId } from "../../selectors/getProductsByCategoryId";
import { Loader } from "../../utils/modules/loader/Loader";
import { ProductListContainer } from "./ProductList.styled";
import { ProductListGrid } from "./ProductListGrid";
import { ProductSideBar } from "./ProductSideBar";

export const ProductList = () => {
  const { data: categoriesList } = useProductCategories();
  const { results } = categoriesList;

  const [categories, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const productsFiltered = useProductsBycategoryId(categories);
  const productsFilteredInitial = useProductsGrid();

  useEffect(() => {
    console.log("vacio");
    setProducts(productsFilteredInitial);
    setLoading(false);
  }, [!categories.length]);

  useEffect(() => {
    console.log(categories.length);
    setLoading(true);
    setTimeout(() => {
      setProducts(productsFiltered);
      console.log(productsFiltered);
      setLoading(false);
    }, 2000);
  }, [categories.length > 0]);

  const showProductsList = !loading && products.total_results_size > 0;

  return (
    <>
      <ProductListContainer>
        {!showProductsList > 0 ? (
          <Loader />
        ) : (
          <ProductListGrid products={products.results} />
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
