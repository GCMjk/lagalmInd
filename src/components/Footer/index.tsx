import Link from "next/link";
import Image from "next/image";

import { certificaton, socials } from "@service/data";

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-12">
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
          <div className="flex justify-center items-center space-x-6">
            {socials.map(({ icon, href }, index) => {
              return (
                <Link href={href} key={index}>
                  <a className="text-tertiary text-md" target="_blank">
                    {icon}
                  </a>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col text-center text-paragraph opacity-60">
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
