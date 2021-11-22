/* eslint-disable no-unused-vars */
import { results } from "../mocks/en-us/products.json";

export const getProductsByCategoryId = (categories = []) => {
  if (categories.length === 0) {
    return results;
  } else {
    const products = [];
    categories.map((id) => {
      results.map((product) => {
        if (product.data.category.id === id) {
          products.push(product);
        }
      });
    });
    return products;
  }
};
