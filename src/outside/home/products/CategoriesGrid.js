import dataCategories from '../../../mocks/en-us/product-categories.json';
import { CategorieCard } from '../categories/CategorieCard';
import { ProductsCategories, ProductsList, ProductsCategoriesTitle } from './CategoriesGrid.styled';

const {results} = dataCategories;


export const CategoriesGrid = () => {
    return (
        <ProductsCategories>
            <ProductsCategoriesTitle>
                Categories
            </ProductsCategoriesTitle>
            <ProductsList>
           {
               results.map( data => (
                   <CategorieCard key={data.id}  { ...data.data }/>
                   ))
            }
            </ProductsList>
        </ProductsCategories>
    )
}