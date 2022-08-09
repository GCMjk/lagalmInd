import Link from "next/link";
import Image from "next/image";

import { certificaton } from "@service/data";
import Socials from "@components/Socials";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100">
        <div className="container mx-auto py-8 flex justify-around flex-col lg:flex-row px-6">
          <div className="space-y-4 w-full text-center lg:text-left">
            <div>
              <h3 className="font-body text-paragraph text-2xl">
                Certificaciones
              </h3>
              <p className="text-sm">
                Contamos con las certificaciones en ISO IATF 16949:2016 Sistema
                de gestión de calidad en la industria automotriz y Bereau
                Veritas.
              </p>
            </div>
            <div className="w-full flex justify-center lg:justify-start ml-2">
              {certificaton.map(({ name, icon, href }, index) => {
                return (
                  <Link href={href} key={index}>
                    <a>
                      <Image src={icon} width="100" height="50" alt={name} />
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="space-y-4 w-full flex items-center flex-row justify-center lg:flex-col">
            <h3 className="font-body text-paragraph text-2xl">Conocenos</h3>
            <ul className="space-y-2 text-paragraph/80 ml-4">
              <li>
                <Link href="/contacto">
                  <a>Contactanos</a>
                </Link>
              </li>
              <li>
                <Link href="/nosotros">
                  <a>Servicios</a>
                </Link>
              </li>
              <li>
                <Link href="/vacantes">
                  <a>Vacantes</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="bg-gray-200 text-gray-400/80 flex flex-col items-center lg:flex-row lg:justify-center font-bold py-4">
          &copy; 2022 Lagalm Industrial S.A. de C.V.
          <span className="ml-1 font-body font-normal">
            Todos los derechos reservados.
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
