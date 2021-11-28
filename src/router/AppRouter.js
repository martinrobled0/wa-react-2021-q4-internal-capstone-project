import { Route, Routes } from "react-router-dom";
import { Home } from "../components/outside/home/Home";
import { ProductList } from "../components/outside/home/products/productList/ProductList";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductList />}></Route>
      </Routes>
    </div>
  );
};
