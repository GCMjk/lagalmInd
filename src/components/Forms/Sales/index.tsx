import { useFormik } from "formik";
import * as Yup from "yup";

import { useMutation } from "@apollo/client";
import { AddContactDocument, Purpose } from "@service/graphql";

const SalesForm = () => {
  const [newContactSales] = useMutation(AddContactDocument);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      workPosition: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string()
        .required("El correo es obligatorio")
        .email("El correo no es valido"),
      phone: Yup.string().required("Numero obligatorio"),
      company: Yup.string(),
      workPosition: Yup.string(),
      message: Yup.string(),
    }),
    onSubmit: async (values) => {
      const { name, email, phone, company, workPosition, message } = values;

      try {
        const { data } = await newContactSales({
          variables: {
            contact: {
              name,
              email,
              phone,
              type: Purpose.Sales,
              company,
              workPosition,
              message,
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

          {/* Company */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="company"
            >
              Empresa
            </label>
            <input
              className={
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline " +
                (formik.touched.company && formik.errors.company
                  ? "border-red-500"
                  : "")
              }
              id="company"
              type="text"
              placeholder="¿En que empresa labora?"
              value={formik.values.company}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.company && formik.errors.company ? (
              <p className="text-red-500 text-xs italic">
                {formik.errors.company}
              </p>
            ) : null}
          </div>

          {/* WorkPosition */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="workPosition"
            >
              Cargo
            </label>
            <input
              className={
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline " +
                (formik.touched.workPosition && formik.errors.workPosition
                  ? "border-red-500"
                  : "")
              }
              id="workPosition"
              type="text"
              placeholder="Seleccione un cargo"
              value={formik.values.workPosition}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.workPosition && formik.errors.workPosition ? (
              <p className="text-red-500 text-xs italic">
                {formik.errors.workPosition}
              </p>
            ) : null}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Mensaje
            </label>
            <input
              className={
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline " +
                (formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : "")
              }
              id="message"
              type="text"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message ? (
              <p className="text-red-500 text-xs italic">
                {formik.errors.message}
              </p>
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
export default SalesForm;
