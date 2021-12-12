/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useProductsBycategoryId } from "../hooks/useProductsByCategoryId";
import { useProductsGrid } from "../hooks/useProductsGrid";

export const getProductsByCategoryId = ({ categories = [] }) => {
  const [filtered, setFiltered] = useState({
    results: [],
    total_results_size: 0,
  });

  console.log(categories);
  if (!categories.length) {
    const { data } = useProductsGrid();
    return data;
  }
  let products = [{ results: [], total_results_size: 0 }];

  categories.forEach((id) => {
    let productsFiltered = useProductsBycategoryId(id);
    products = [...productsFiltered];
  });
  console.log(products);
  setFiltered(() => ({
    results: products,
    total_results_size: products.length,
  }));

  return filtered;
};
