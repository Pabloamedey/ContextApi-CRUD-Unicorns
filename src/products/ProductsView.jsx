import { useState } from "react";
import { initialProducts } from "./productsData";
import ProductForm from "./ProductForm";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const ProductsView = () => {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("productos");
    return saved ? JSON.parse(saved) : initialProducts;
  });

  const saveToStorage = (data) => {
    localStorage.setItem("productos", JSON.stringify(data));
  };

  const addProduct = ({ name, price }) => {
    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
    };
    const updated = [...products, newProduct];
    setProducts(updated);
    saveToStorage(updated);
  };

  const deleteProduct = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    saveToStorage(updated);
  };

  return (
    <div className="section fade-in">
      <h2>Gestión de Productos</h2>

      <ProductForm onAdd={addProduct} />

      <DataTable value={products} paginator rows={5} emptyMessage="No hay productos.">
        <Column field="name" header="Nombre" />
        <Column field="price" header="Precio" />
        <Column
          header="Acciones"
          body={(rowData) => (
            <Button
              icon="pi pi-trash"
              severity="danger"
              onClick={() => deleteProduct(rowData.id)}
              className="p-button-sm"
            />
          )}
        />
      </DataTable>
    </div>
  );
};

export default ProductsView;
