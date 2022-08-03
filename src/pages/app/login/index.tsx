import Image from "next/image";
import LoginForm from "@components/App/Login";

import Logo from "../../../assets/img/logo.png";

const Login = () => {
  return (
    <div className="bg-login-color">
      <div className="flex justify-center h-screen">
        <div className="hidden bg-cover bg-center lg:block lg:w-2/3 bg-login">
          <div className="flex items-center h-full px-20 backdrop-blur-sm bg-black/50">
            <div>
              <h2 className="text-4xl font-bold text-white">Lorem, ipsum.</h2>

              <p className="max-w-xl mt-8 text-slate-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <Image height={150} width={150} src={Logo} alt="Logo Lagalm" />

              <p className="mt-3 text-gray-300">
                Inicia sesión para acceder a tu cuenta
              </p>
            </div>
            <div className="mt-8">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
