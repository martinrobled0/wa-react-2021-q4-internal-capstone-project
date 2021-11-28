/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import dataProductList from "../../../../../mocks/en-us/product-categories.json";
import { getProductsByCategoryId } from "../../../../../selectors/getProductsByCategory";
import { Loader } from "../../../../../utils/modules/loader/Loader";
import { Pagination } from "../../../../../utils/modules/Pagination/Pagination";
import { CategorieCard } from "../../categories/CategorieCard";
import { ProductCard } from "../ProductCard";
import { ProductListContainer, ProductListGrid } from "./ProductList.styled";
import { SideBarLayout, SideBarWrapper } from "./ProductsSideBar.styled";

const { results } = dataProductList;
export const ProductList = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProducts(getProductsByCategoryId(category));
      setLoading(false);
    }, 2000);
  }, [category.length]);

  const handleCategoryChange = (categoryId) => () => {
    if (category.includes(categoryId)) {
      setCategory(category.filter((item) => !item));
    } else {
      setCategory(category.concat(categoryId));
    }
  };

  return (
    <>
      <ProductListContainer>
        {loading ? (
          <Loader />
        ) : (
          <ProductListGrid>
            <div className="title">Products</div>
            <div className="container">
              {products.map((product) => (
                <ProductCard key={product.id} {...product.data} />
              ))}
            </div>
          </ProductListGrid>
        )}
        <SideBarLayout>
          <div className="title"> Categories </div>
          {results.map((category) => (
            <SideBarWrapper
              key={category.id}
              onClick={handleCategoryChange(category.id)}
            >
              <CategorieCard
                id={category.id}
                renderImage={false}
                {...category.data}
              />
            </SideBarWrapper>
          ))}
        </SideBarLayout>
      </ProductListContainer>
      <Pagination />
    </>
  );
};
