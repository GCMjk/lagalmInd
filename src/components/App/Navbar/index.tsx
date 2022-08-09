import Image from "next/image";

import { MenuAlt2Icon, ChevronDownIcon } from "@heroicons/react/solid";
import profile from "@assets/img/avatar.png";
import NamePage from "../NamePage";

const Navbar = () => {
  return (
    <div className="h-18 border-b border-gray-200 bg-white">
      <div className="flex justify-between items-center h-full text-gray-500 mx-10 md:mx-12">
        {/* <div className="relative flex h-6 w-6">
          <span className="animate-ping right-0 absolute h-2 w-2 rounded-full bg-red-500"></span>
          <BellIcon className="relative h-6 w-6 bg-reds-500" />
        </div> */}
        <MenuAlt2Icon className="h-6 block md:hidden" />
        <NamePage />
        {/* <p className="uppercase font-bold tracking-wider">Inicio</p> */}
        <div className="flex items-center">
          <Image
            className="rounded-full"
            src={profile}
            height={40}
            width={40}
            alt="Avatar"
          />
          <ChevronDownIcon className="h-4 ml-2 mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
