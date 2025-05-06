import { Routes, Route, Navigate, Link } from "react-router-dom";
import { UnicornProvider } from "./context/UnicornContext";
import UnicornRoutes from "./unicorns";
import ProductsRoutes from "./products";

function App() {
  return (
    <>
      <nav>
        <Link to="/unicornios">🦄 Unicornios</Link>
        <Link to="/productos"> 🛒 Productos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/unicornios" />} />
        <Route
          path="/unicornios/*"
          element={
            <UnicornProvider>
              <UnicornRoutes />
            </UnicornProvider>
          }
        />
        <Route path="/productos/*" element={<ProductsRoutes />} />
      </Routes>
    </>
  );
}

export default App;
