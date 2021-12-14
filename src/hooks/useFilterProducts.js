import { useState, useEffect } from "react";
import { useProductsGrid } from "./useProductsGrid";
import { useProductsBycategoryId } from "./useProductsByCategoryId";

export const useFilterProducts = (categories = []) => {
  const [products, setProducts] = useState({ data: {}, isLoading: true });
  const [categoriesQuery, setCategoriesQuery] = useState("");
  useEffect(() => {
    if (categories.length > 0) {
      setCategoriesQuery(categories.join(","));
    }
  }, [categories]);
  const productsFiltered = useProductsBycategoryId(categoriesQuery);
  const productsFilteredInitial = useProductsGrid();
  useEffect(() => {
    setProducts({ data: {}, isLoading: true });
    if (categories.length > 0) {
      setProducts(productsFiltered);
    } else {
      // default
      setProducts(productsFilteredInitial);
    }
  }, [
    categories,
    productsFilteredInitial,
    productsFiltered,
    categoriesQuery,
    categories,
  ]);
  return products;
};
