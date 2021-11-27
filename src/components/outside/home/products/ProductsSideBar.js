import { CategorieCard } from "../categories/CategorieCard";
import {
  SideBarLayout,
  SideBarWrapper,
} from "./productList/ProductsSideBar.styled";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getProductsByCategoryId } from "../../../../selectors/getProductsByCategory";
/* eslint-disable no-unused-vars */

const ProductSideBar = ({ results }) => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProducts(getProductsByCategoryId(category));
      setLoading(false);
    }, 2000);
  }, [category.length]);

  const handleCategoryChange = (categoryId) => () => {
    console.log(categoryId);
    if (category.includes(categoryId)) {
      console.log("1");
      setCategory(category.filter((item) => !item));
    } else {
      console.log("2");
      setCategory(category.concat(categoryId));
    }
  };

  return (
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
  );
};

ProductSideBar.propTypes = {
  results: PropTypes.any,
};

export default ProductSideBar;
