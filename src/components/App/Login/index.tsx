import { useFormik } from "formik";
import * as Yup from "yup";

import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { UserLoginDocument } from "@service/graphql";

import Link from "next/link";
import ButtonUI from "@components/UI/Button";

const LoginForm = () => {
  const [login] = useMutation(UserLoginDocument);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El correo no es valido")
        .required("El correo es obligatorio."),
      password: Yup.string().required("La contraseña es obligatoria."),
    }),
    onSubmit: async (values) => {
      const { email, password } = values;
      try {
        const { data } = await login({
          variables: {
            email,
            password,
          },
        });

        console.log(data);

        /* if (!status) {
          return toast(message, TYPE_ICON.ERROR);
        }
        if (status) {
          localStorage.setItem('token', token);
          router.push('/');
          return toast(`Bienvenido ${email}`, TYPE_ICON.SUCCESS);
        } */
      } catch (e) {}
    },
  });
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      {/* Email */}
      <div className="mb-4">
        <input
          className={
            "input " +
            (formik.touched.email && formik.errors.email
              ? "border-red-500"
              : "")
          }
          id="email"
          type="email"
          placeholder="Correo del usuario"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="input--error">{formik.errors.email}</p>
        ) : null}
      </div>

      {/* Pass */}
      <div className="mb-4">
        <input
          className={
            "input " +
            (formik.touched.password && formik.errors.password
              ? "border-red-500"
              : "")
          }
          id="password"
          type="password"
          placeholder="Contraseña del usuario"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="input--error">{formik.errors.password}</p>
        ) : null}
      </div>

      <div className="flex justify-end mb-2">
        <Link href={"/"}>
          <a className="text-sm text-gray-400 hover:text-blue-500 transition-all duration-200">
            ¿Olvidaste tu contraseña?
          </a>
        </Link>
      </div>

      <ButtonUI linkButton="/app" size="Medium">
        {formik.isValid && formik.dirty ? "Iniciar sesión" : "Llena los campos"}
      </ButtonUI>
    </form>
  );
};

export default LoginForm;
