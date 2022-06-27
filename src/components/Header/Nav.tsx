import { useRouter } from "next/router";
import Link from "next/link";

import { navigation } from "@service/data";

const Nav = ({ bg }: { bg: boolean }) => {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map(({ name, href }, index) => {
          return (
            <li
              className="hover:text-blue-200 cursor-pointer transition-all duration-200"
              key={index}
            >
              <Link href={href}>
                <a
                  className={
                    router.pathname === href
                      ? "tracking-widest font-extrabold " +
                        (bg ? "text-white" : "text-slate-300")
                      : bg
                      ? "text-white"
                      : "text-slate-200"
                  }
                >
                  {name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
