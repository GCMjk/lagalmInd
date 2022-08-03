import Image from "next/image";

import { SearchIcon, BellIcon } from "@heroicons/react/solid";
import profile from "@assets/img/avatar.png";

const Navbar = () => {
  return (
    <div className="h-18 border-b border-gray-200 bg-white">
      <div className="flex justify-between items-center h-full text-gray-500 mx-20">
        <div className="flex justify-center items-center gap-x-3">
          <SearchIcon className="h-4" />
          <span className="text-gray-300 tracking-widest">Buscar ...</span>
        </div>
        <div className="flex items-center gap-x-6">
          <div className="relative flex h-6 w-6">
            <span className="animate-ping right-0 absolute h-2 w-2 rounded-full bg-red-500"></span>
            <BellIcon className="relative h-6 w-6 bg-reds-500" />
          </div>
          <Image
            className="rounded-full"
            src={profile}
            height={40}
            width={40}
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
