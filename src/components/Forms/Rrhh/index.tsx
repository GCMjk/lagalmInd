import { useFormik } from "formik";
import * as Yup from "yup";

import { useMutation } from "@apollo/client";
import { AddContactDocument, Purpose } from "@service/graphql";

const RrhhForm = () => {
  const [newContactRrhh] = useMutation(AddContactDocument);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      age: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string()
        .required("El correo es obligatorio")
        .email("El correo no es valido"),
      phone: Yup.string().required("Numero obligatorio"),
      age: Yup.string(),
    }),
    onSubmit: async (values) => {
      const { name, email, phone, age } = values;

      try {
        const { data } = await newContactRrhh({
          variables: {
            contact: {
              name,
              email,
              phone,
              age,
              type: Purpose.Rrhh,
            },
          },
        });

        console.log(data);
      } catch (e) {}
    },
  });

  return (
    <div className="flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8">
      <form className="flex flex-col gap-y-4" onSubmit={formik.handleSubmit}>
        {/* Nombre */}
        <div className="mb-4">
          <input
            className={
              "border border-gray-300 focus:border-tertiary rounded w-full px-4 h-14 text-sm outline-none " +
              (formik.touched.name && formik.errors.name
                ? "border-red-500"
                : "")
            }
            id="name"
            type="text"
            placeholder="Nombre del solicitante"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="text-red-500 text-xs italic">{formik.errors.name}</p>
          ) : null}
        </div>

        {/* Correo */}
        <div className="mb-4">
          <input
            className={
              "border border-gray-300 focus:border-tertiary rounded w-full px-4 h-14 text-sm outline-none " +
              (formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "")
            }
            id="email"
            type="email"
            placeholder="Correo del solicitante"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
          ) : null}
        </div>

        {/* Teléfono */}
        <div className="mb-4">
          <input
            className={
              "border border-gray-300 focus:border-tertiary rounded w-full px-4 h-14 text-sm outline-none " +
              (formik.touched.phone && formik.errors.phone
                ? "border-red-500"
                : "")
            }
            id="phone"
            type="text"
            placeholder="Teléfono del solicitante"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p className="text-red-500 text-xs italic">{formik.errors.phone}</p>
          ) : null}
        </div>

        {/* Edad */}
        <div className="mb-4">
          <input
            className={
              "border border-gray-300 focus:border-tertiary rounded w-full px-4 h-14 text-sm outline-none " +
              (formik.touched.age && formik.errors.age ? "border-red-500" : "")
            }
            id="age"
            type="text"
            placeholder="Edad del solicitante"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.age && formik.errors.age ? (
            <p className="text-red-500 text-xs italic">{formik.errors.age}</p>
          ) : null}
        </div>

        <button
          type="submit"
          className={
            "btn btn-md rounded md:btn-lg " +
            (formik.isValid && formik.dirty
              ? "opacity-100 cursor-pointer bg-tertiary hover:bg-accent-hover transition-all duration-300"
              : "opacity-40 cursor-default bg-slate-600")
          }
        >
          {formik.isValid && formik.dirty ? "Contactar" : "Llena los campos"}
        </button>
      </form>
    </div>
  );
};
export default RrhhForm;
