import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/lagalm.svg";

import Nav from "@components/Header/Nav";
import NavMobile from "@components/Header/NavMobile";
import Translate from "@components/Header/Translate";

const Header = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-black h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a>
            <Image
              src={Logo}
              width={50}
              height={50}
              alt="Logo Lagalm Industrial"
            />
          </a>
        </Link>

        {/* Nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>

        {/* Translate */}
        <div className="hidden lg:block">
          <Translate />
        </div>

        {/* NavMobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
