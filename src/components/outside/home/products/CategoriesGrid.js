import { useProductCategories } from "../../../../hooks/useProductCategories";
import { CategorieCard } from "../categories/CategorieCard";
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
            <CategorieCard key={data.id} id={data.id} {...data.data} />
          ))}
      </ProductsList>
    </ProductsCategories>
  );
};
