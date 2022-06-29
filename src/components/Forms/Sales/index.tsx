import { useFormik } from "formik";
import * as Yup from "yup";

import { useMutation } from "@apollo/client";
import { AddContactDocument, Purpose, WorkPosition } from "@service/graphql";

const enumWorkPosition = Object.keys(WorkPosition).map((name) => {
  return {
    id: WorkPosition[name as keyof typeof WorkPosition],
    name: name.replace(/([A-Z])/g, " $1").trim(),
  };
});

const SalesForm = () => {
  const [newContactSales] = useMutation(AddContactDocument);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      workPosition: WorkPosition.Otros,
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string()
        .required("El correo es obligatorio")
        .email("El correo no es valido"),
      phone: Yup.string().required("Numero obligatorio"),
      company: Yup.string().required(
        "Ingresa el nombre de tu empresa para contactarte"
      ),
      workPosition: Yup.string().required("Elija una opción"),
      message: Yup.string().required("Incluya un mensaje"),
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
    <div className="mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8">
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

        {/* Company */}
        <div className="mb-4">
          <input
            className={
              "border border-gray-300 focus:border-tertiary rounded w-full px-4 h-14 text-sm outline-none " +
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
          <select
            className={
              "border border-gray-300 focus:border-tertiary rounded w-full px-4 h-14 text-sm outline-none " +
              (formik.touched.workPosition && formik.errors.workPosition
                ? "border-red-500"
                : "")
            }
            id="workPosition"
            value={formik.values.workPosition}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {enumWorkPosition.map(({ id, name }, index) => {
              return (
                <option key={index} value={id}>
                  {name}
                </option>
              );
            })}
          </select>
          {formik.touched.workPosition && formik.errors.workPosition ? (
            <p className="text-red-500 text-xs italic">
              {formik.errors.workPosition}
            </p>
          ) : null}
        </div>

        {/* Message */}
        <div className="mb-4">
          <textarea
            className={
              "border border-gray-300 focus:border-tertiary rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none " +
              (formik.touched.message && formik.errors.message
                ? "border-red-500"
                : "")
            }
            id="message"
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

        <button
          type="submit"
          className={
            "btn btn--md rounded md:btn--lg " +
            (formik.isValid && formik.dirty
              ? "opacity-100 cursor-pointer btn--hover"
              : "opacity-40 cursor-default bg-slate-600")
          }
        >
          {formik.isValid && formik.dirty ? "Contactar" : "Llena los campos"}
        </button>
      </form>
    </div>
  );
};
export default SalesForm;
