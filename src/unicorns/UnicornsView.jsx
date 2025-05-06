import { useNavigate } from "react-router-dom";
import { useUnicorns } from "../context/UnicornContext";
import { useState } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

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

  const handleExportPDF = () => {
    const doc = new jsPDF();
  
    doc.setFontSize(18);
    doc.setTextColor(103, 80, 164); // color lila
    doc.text("Listado de Unicornios", 105, 20, { align: "center" });
  
    const tableData = unicorns.map((u) => [
      u.name,
      u.data?.color,
      u.data?.power,
      u.data?.age,
      u.data?.status || "Activo",
    ]);
  
    autoTable(doc, {
      startY: 30,
      head: [["Nombre", "Color", "Poder", "Edad", "Estado"]],
      body: tableData,
      headStyles: {
        fillColor: [103, 80, 164],
        textColor: 255,
        fontStyle: "bold",
        halign: "center",
      },
      bodyStyles: {
        halign: "center",
        textColor: [40, 40, 40],
      },
      alternateRowStyles: {
        fillColor: [245, 245, 255],
      },
      styles: {
        fontSize: 11,
        cellPadding: 4,
      },
      margin: { top: 30 },
    });
  
    doc.save("unicornios.pdf");
  };

  return (
    <div className="section fade-in">
      <h2>Gestión de Unicornios</h2>

      <div className="mb-4 flex gap-2">
        <Button label="Crear Unicornio" icon="pi pi-plus" onClick={() => navigate("/unicornios/crear")} />
        <Button label="Editar" icon="pi pi-pencil" severity="warning" onClick={handleEdit} disabled={!selectedUnicorn} />
        <Button label="Eliminar" icon="pi pi-trash" severity="danger" onClick={handleDelete} disabled={!selectedUnicorn} />
        <Button label="Exportar PDF" icon="pi pi-file-pdf" severity="info" onClick={handleExportPDF}/>
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
        <Column
          header="Estado"
          body={(rowData) => {
            const estado = rowData.data?.status || "Desconocido";
            const clase =
              estado === "Activo"
                ? "estado-activo"
                : estado === "Inactivo"
                ? "estado-inactivo"
                : estado === "En misión"
                ? "estado-en-mision"
                : "estado-herido";
            return <span className={clase}>{estado}</span>;
          }}
        />
      </DataTable>
    </div>
  );
};

export default UnicornsView;
