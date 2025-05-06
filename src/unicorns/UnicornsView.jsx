import { useNavigate } from "react-router-dom";
import { useUnicorns } from "../context/UnicornContext";
import { useState } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const UnicornsView = () => {
  const navigate = useNavigate();
  const { unicorns, deleteUnicorn } = useUnicorns();
  const [selectedUnicorn, setSelectedUnicorn] = useState(null);

  const handleEdit = () => {
    if (!selectedUnicorn) return alert("Selecciona un unicornio");
    navigate(`/unicornios/editar/${selectedUnicorn._id}`);
  };

  const handleDelete = () => {
    if (!selectedUnicorn) return alert("Selecciona un unicornio");
    const confirm = window.confirm("¿Estás seguro de eliminar este unicornio?");
    if (confirm) {
      deleteUnicorn(selectedUnicorn._id);
      setSelectedUnicorn(null);
    }
  };

  return (
    <div className="section fade-in">
      <h2>Gestión de Unicornios</h2>

      <div className="mb-4 flex gap-2">
        <Button label="Crear Unicornio" icon="pi pi-plus" onClick={() => navigate("/unicornios/crear")} />
        <Button label="Editar" icon="pi pi-pencil" severity="warning" onClick={handleEdit} disabled={!selectedUnicorn} />
        <Button label="Eliminar" icon="pi pi-trash" severity="danger" onClick={handleDelete} disabled={!selectedUnicorn} />
      </div>

      <DataTable
        value={unicorns}
        selectionMode="single"
        dataKey="_id"
        selection={selectedUnicorn}
        onSelectionChange={(e) => setSelectedUnicorn(e.value)}
        paginator
        rows={5}
        responsiveLayout="scroll"
        emptyMessage="No hay unicornios aún."
      >
        <Column field="name" header="Nombre" />
        <Column field="data.color" header="Color" />
        <Column field="data.age" header="Edad" />
        <Column field="data.power" header="Poder" />
      </DataTable>
    </div>
  );
};

export default UnicornsView;
