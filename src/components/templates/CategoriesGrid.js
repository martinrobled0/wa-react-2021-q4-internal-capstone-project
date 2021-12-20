import { useProductCategories } from "../../hooks/useProductCategories";
import { CategorieCard } from "../elements/CategorieCard";
import {
  ProductsCategories,
  ProductsList,
  ProductsCategoriesTitle,
} from "./CategoriesGrid.styled";

export const CategoriesGrid = () => {
  const { data } = useProductCategories();
  const { results } = data;
  return (
    <ProductsCategories>
      <ProductsCategoriesTitle>Categories</ProductsCategoriesTitle>
      <ProductsList>
        {results &&
          results.map((data) => (
            <CategorieCard
              key={data.id}
              id={data.id}
              name={data.data.name}
              main_image={data.data.main_image}
            />
          ))}
      </ProductsList>
    </ProductsCategories>
  );
};
