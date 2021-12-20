import { Route, Routes } from "react-router-dom";
import { ProductDetailPage } from "../components/pages/ProductDetailPage";
import { ProductList } from "../components/templates/ProductList";
import { Home } from "../components/pages/Home";
import { SearchPage } from "../components/pages/SeachPage";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/search/" element={<SearchPage />} />
        <Route path="/search/:q" element={<SearchPage />} />
      </Routes>
    </div>
  );
};
