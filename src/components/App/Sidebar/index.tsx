import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "@assets/img/logo.png";

import {
  HomeIcon,
  OfficeBuildingIcon,
  ArchiveIcon,
  CogIcon,
  ChatIcon,
  TicketIcon,
  BriefcaseIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import ToolTip from "./ToolTip";

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="flex h-screen w-18 flex-col items-center border-r border-gray-200 bg-white">
      <div className="flex h-18 w-full items-center justify-center border-gray-200">
        <Image src={Logo} height={45} width={45} alt="Lagalm" />
      </div>
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">
        <Link href="/app">
          <a
            className={
              (router.pathname === "/app"
                ? "text-secondary"
                : "text-gray-300") +
              " group relative bg-gray-50 hover:bg-gray-200 rounded-xl p-2 transition-all duration-500"
            }
          >
            <HomeIcon
              className={
                (router.pathname === "/app" ? "drop-shadow-lg" : "") + " h-8"
              }
            />
            <ToolTip>Inicio</ToolTip>
          </a>
        </Link>
        <Link href="/app/compras/proveedores">
          <a
            className={
              (router.pathname === "/app/compras/proveedores" ||
              router.pathname === "/app/compras/proveedores/[id]"
                ? "text-secondary"
                : "text-gray-300") +
              " group relative bg-gray-50 hover:bg-gray-200 rounded-xl p-2 transition-all duration-500"
            }
          >
            <OfficeBuildingIcon
              className={
                (router.pathname === "/app/compras/proveedores" ||
                router.pathname === "/app/compras/proveedores/[id]"
                  ? "drop-shadow-lg"
                  : "") + " h-8"
              }
            />
            <ToolTip>Agregar provedores</ToolTip>
          </a>
        </Link>
        <Link href="/app/compras/productos">
          <a
            className={
              (router.pathname === "/app/compras/productos" ||
              router.pathname === "/app/compras/productos/[id]"
                ? "text-secondary"
                : "text-gray-300") +
              " group relative bg-gray-50 hover:bg-gray-200 rounded-xl p-2 transition-all duration-500"
            }
          >
            <ArchiveIcon
              className={
                (router.pathname === "/app/compras/productos" ||
                router.pathname === "/app/compras/productos/[id]"
                  ? "drop-shadow-lg"
                  : "") + " h-8"
              }
            />
            <ToolTip>Administrar los productos de un proveedor</ToolTip>
          </a>
        </Link>
        <Link href="/app/rrhh/contactos">
          <a
            className={
              (router.pathname === "/app/rrhh/contactos" ||
              router.pathname === "/app/rrhh/contactos/[id]"
                ? "text-secondary"
                : "text-gray-300") +
              " group relative bg-gray-50 hover:bg-gray-200 rounded-xl p-2 transition-all duration-500"
            }
          >
            <ChatIcon
              className={
                (router.pathname === "/app/rrhh/contactos" ||
                router.pathname === "/app/rrhh/contactos/[id]"
                  ? "drop-shadow-lg"
                  : "") + " h-8"
              }
            />
            <ToolTip>Administrar los contactos de la web</ToolTip>
          </a>
        </Link>
        <Link href="/app/rrhh/permisos">
          <a
            className={
              (router.pathname === "/app/rrhh/permisos" ||
              router.pathname === "/app/rrhh/permisos/[id]"
                ? "text-secondary"
                : "text-gray-300") +
              " group relative bg-gray-50 hover:bg-gray-200 rounded-xl p-2 transition-all duration-500"
            }
          >
            <TicketIcon
              className={
                (router.pathname === "/app/rrhh/permisos" ||
                router.pathname === "/app/rrhh/permisos/[id]"
                  ? "drop-shadow-lg"
                  : "") + " h-8"
              }
            />
            <ToolTip>Administrar los permisos de los usuarios</ToolTip>
          </a>
        </Link>
        <Link href="/app/rrhh/trabajos">
          <a
            className={
              (router.pathname === "/app/rrhh/trabajos" ||
              router.pathname === "/app/rrhh/trabajos/[id]"
                ? "text-secondary"
                : "text-gray-300") +
              " group relative bg-gray-50 hover:bg-gray-200 rounded-xl p-2 transition-all duration-500"
            }
          >
            <BriefcaseIcon
              className={
                (router.pathname === "/app/rrhh/trabajos" ||
                router.pathname === "/app/rrhh/trabajos/[id]"
                  ? "drop-shadow-lg"
                  : "") + " h-8"
              }
            />
            <ToolTip>Administrar los trabajos para una vacante</ToolTip>
          </a>
        </Link>
        <Link href="/app/rrhh/vacantes">
          <a
            className={
              (router.pathname === "/app/rrhh/vacantes" ||
              router.pathname === "/app/rrhh/vacantes/[id]"
                ? "text-secondary"
                : "text-gray-300") +
              " group relative bg-gray-50 hover:bg-gray-200 rounded-xl p-2 transition-all duration-500"
            }
          >
            <UserGroupIcon
              className={
                (router.pathname === "/app/rrhh/vacantes" ||
                router.pathname === "/app/rrhh/vacantes/[id]"
                  ? "drop-shadow-lg"
                  : "") + " h-8"
              }
            />
            <ToolTip>Administrar las vacantes</ToolTip>
          </a>
        </Link>
      </nav>
      <div className="flex flex-col items-center gap-y-4 py-10">
        <Link href="/app/perfil">
          <a
            className={
              (router.pathname === "/app/perfil"
                ? "text-secondary"
                : "text-gray-300") +
              " group relative bg-gray-50 hover:bg-gray-200 rounded-xl p-2 transition-all duration-500"
            }
          >
            <CogIcon
              className={
                (router.pathname === "/app/perfil" ? "drop-shadow-lg" : "") +
                " h-8"
              }
            />
            <ToolTip>Configuraciones</ToolTip>
          </a>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
