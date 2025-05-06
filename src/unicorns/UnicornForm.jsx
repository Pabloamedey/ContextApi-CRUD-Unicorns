import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useUnicorns } from "../context/UnicornContext";

const UnicornForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { unicorns, createUnicorn, editUnicorn } = useUnicorns();

  const unicornToEdit = id ? unicorns.find((u) => u._id === id) : null;

  const formik = useFormik({
    initialValues: {
      name: "",
      color: "",
      age: "",
      power: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Requerido"),
      color: Yup.string().required("Requerido"),
      age: Yup.number().required("Requerido").min(1, "Edad debe ser mayor a 0"),
      power: Yup.string().required("Requerido"),
    }),
    onSubmit: async (values) => {
      if (id) {
        await editUnicorn({ id, ...values });
      } else {
        await createUnicorn(values);
      }
      navigate("/unicornios");
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    if (unicornToEdit) {
      formik.setValues({
        name: unicornToEdit.name || "",
        color: unicornToEdit.data?.color || "",
        age: unicornToEdit.data?.age || "",
        power: unicornToEdit.data?.power || "",
      });
    }
  }, [unicornToEdit]);

  return (
    <div className="section">
      <h2>{id ? "Editar Unicornio" : "Crear Unicornio"}</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && <small>{formik.errors.name}</small>}
        </div>
        <div>
          <label>Color</label>
          <input
            name="color"
            value={formik.values.color}
            onChange={formik.handleChange}
          />
          {formik.errors.color && <small>{formik.errors.color}</small>}
        </div>
        <div>
          <label>Edad</label>
          <input
            name="age"
            type="number"
            value={formik.values.age}
            onChange={formik.handleChange}
          />
          {formik.errors.age && <small>{formik.errors.age}</small>}
        </div>
        <div>
          <label>Poder</label>
          <input
            name="power"
            value={formik.values.power}
            onChange={formik.handleChange}
          />
          {formik.errors.power && <small>{formik.errors.power}</small>}
        </div>
        <button type="submit">
          {id ? "Guardar Cambios" : "Crear Unicornio"}
        </button>
      </form>
    </div>
  );
};

export default UnicornForm;
