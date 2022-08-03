import Link from "next/link";
import Image from "next/image";

import { certificaton } from "@service/data";
import Socials from "@components/Socials";

const Footer = () => {
  return (
    <footer className="bg-gray-300 mt-8 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center space-y-6 lg:flex-row lg:space-y-0">
          <div className="flex justify-start items-center space-x-6">
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
          <Socials bg />
          <div className="flex flex-col text-center opacity-60">
            <p className="text-[15px]">
              &copy; 2022 Lagalm Industrial S.A. de C.V.
            </p>
            <p className="text-[13px]"> Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
