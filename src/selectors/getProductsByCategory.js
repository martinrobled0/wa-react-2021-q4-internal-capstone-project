/* eslint-disable no-unused-vars */
import { results } from "../mocks/en-us/products.json";

export const getProductsByCategoryId = (categories = []) => {
  if (categories.length === 0) return results;
  const products = [];
  categories.map((id) => {
    results.map((product) => {
      if (product.data.category.id === id) {
        products.push(product);
      }
    });
  });
  return products;
};

// import { useProductsGrid } from "../hooks/useProductsGrid";

// export const getProductsByCategoryId = (categories = []) => {
//   if (categories.length === 0) {
//     const { data } = useProductsGrid();
//     let { results } = data;
//     return results;
//   }
//   const products = [];
//   const { data } = useProductsGrid();
//   const { results } = data;
//   categories.map((id) => {
//     results &&
//       results.map((product) => {
//         if (product.data.category.id === id) {
//           products.push(product);
//         }
//       });
//   });
//   return products;
// };
