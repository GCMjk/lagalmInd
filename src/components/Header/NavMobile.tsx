import { useState } from "react";
import { motion } from "framer-motion";
import { XIcon, MenuAlt3Icon } from "@heroicons/react/outline";

import Translate from "@components/Header/Translate";
import { navigation } from "@service/data";
import Link from "next/link";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative">
      {/* menu icon */}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white"
      >
        <MenuAlt3Icon className="w-8 h-8" />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-tertiary fixed top-0 right-0"
      ></motion.div>

      {/* menu */}
      <motion.div
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex justify-center items-center flex-col transition-all duration-300 overflow-hidden`}
      >
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8"
        >
          <XIcon className="w-8 h-8" />
        </div>
        {navigation.map(({ name, href }, index) => {
          return (
            <li className="mb-8 list-none" key={index}>
              <Link href={href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className="text-xl cursor-pointer capitalize"
                >
                  {name}
                </a>
              </Link>
            </li>
          );
        })}
      </motion.div>
    </nav>
  );
};

export default NavMobile;
