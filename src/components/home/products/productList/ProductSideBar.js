import { SideBarLayout, SideBarWrapper } from "./ProductsSideBar.styled";
import { CategorieCard } from "../../categories/CategorieCard";
import PropTypes from "prop-types";

export const ProductSideBar = ({ results, categories, setCategory }) => {
  const clearFilters = () => {
    setCategory([]);
  };

  const handleCategoryChange = (categoryId) => () => {
    if (categories.includes(categoryId)) {
      setCategory(categories.filter((category) => category !== categoryId));
    } else {
      setCategory(categories.concat(categoryId));
    }
  };

  return (
    <SideBarLayout>
      <div className="topSection">
        {categories.length > 0 && (
          <button onClick={clearFilters}>Clear all</button>
        )}
      </div>
      <div className="title"> Categories </div>
      {results &&
        results.map((category) => (
          <SideBarWrapper
            key={category.id}
            onClick={handleCategoryChange(category.id)}
          >
            <CategorieCard
              key={category.id}
              id={category.id}
              renderImage={false}
              name={category.data.name}
              main_image={category.data.main_image}
            />
          </SideBarWrapper>
        ))}
    </SideBarLayout>
  );
};

ProductSideBar.propTypes = {
  results: PropTypes.any,
  categories: PropTypes.any,
  setCategory: PropTypes.any,
};
