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
    <div className="flex justify-center mt-5">
      <div className="w-full max-w-sm">
        <form
          className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
          onSubmit={formik.handleSubmit}
        >
          {/* Nombre */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              className={
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline " +
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
              <p className="text-red-500 text-xs italic">
                {formik.errors.name}
              </p>
            ) : null}
          </div>

          {/* Correo */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Correo
            </label>
            <input
              className={
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline " +
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
              <p className="text-red-500 text-xs italic">
                {formik.errors.email}
              </p>
            ) : null}
          </div>

          {/* Teléfono */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Teléfono
            </label>
            <input
              className={
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline " +
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
              <p className="text-red-500 text-xs italic">
                {formik.errors.phone}
              </p>
            ) : null}
          </div>

          {/* Edad */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="age"
            >
              Edad
            </label>
            <input
              className={
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline " +
                (formik.touched.age && formik.errors.age
                  ? "border-red-500"
                  : "")
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

          <input
            type="submit"
            className={
              "bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 " +
              (formik.isValid && formik.dirty
                ? "opacity-100 cursor-pointer"
                : "opacity-40 cursor-default")
            }
            value="Enviar solicitud"
          />
        </form>
      </div>
    </div>
  );
};
export default RrhhForm;
