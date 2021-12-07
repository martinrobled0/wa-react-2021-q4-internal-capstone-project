/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import { useProductCategories } from "../../../../hooks/useProductCategories";
import { getProductsByCategoryId } from "../../../../selectors/getProductsByCategory";
import { Loader } from "../../../../utils/modules/loader/Loader";
import { ProductListContainer } from "./ProductList.styled";
import { ProductListGrid } from "./ProductListGrid";
import { ProductSideBar } from "./ProductSideBar";

export const ProductList = () => {
  const { data } = useProductCategories();
  const { results } = data;

  const [categories, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(products);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProducts(getProductsByCategoryId(categories));
      setLoading(false);
    }, 2000);
  }, [categories.length]);

  return (
    <>
      <ProductListContainer>
        {loading ? <Loader /> : <ProductListGrid products={products} />}
        <ProductSideBar
          results={results}
          categories={categories}
          setCategory={setCategory}
        />
      </ProductListContainer>
    </>
  );
};
