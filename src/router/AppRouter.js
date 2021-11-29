import { Route, Routes } from "react-router-dom";
import { Home } from "../components/outside/home/Home";
import { ProductDetailPage } from "../components/outside/home/products/productDetail/ProductDetailPage";
import { ProductList } from "../components/outside/home/products/productList/ProductList";
import { SearchPage } from "../components/outside/search/SeachPage";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/search/:q" element={<SearchPage />} />
      </Routes>
    </div>
  );
};
