import { useFormik } from "formik";
import * as Yup from "yup";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

const ProductForm = ({ onAdd }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nombre requerido"),
      price: Yup.number().required("Precio requerido").min(1, "Debe ser mayor a 0"),
    }),
    onSubmit: (values, { resetForm }) => {
      onAdd(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-grid mb-4">
      <div className="p-col-12 p-md-5">
        <label>Nombre</label>
        <InputText
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <small>{formik.errors.name}</small>}
      </div>
      <div className="p-col-12 p-md-3">
        <label>Precio</label>
        <InputNumber
          name="price"
          value={formik.values.price}
          onValueChange={(e) =>
            formik.setFieldValue("price", e.value)
          }
        />
        {formik.errors.price && <small>{formik.errors.price}</small>}
      </div>
      <div className="p-col-12 p-md-4 flex align-items-end">
        <Button type="submit" label="Agregar Producto" icon="pi pi-plus" />
      </div>
    </form>
  );
};

export default ProductForm;
