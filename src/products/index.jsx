import { Routes, Route } from "react-router-dom";
import ProductsView from "./ProductsView";

const ProductsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsView />} />
    </Routes>
  );
};

export default ProductsRoutes;
