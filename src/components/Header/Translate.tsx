import Link from "next/link";

import { translate } from "@service/data";

const Translate = () => {
  return (
    <ul className="flex space-x-3">
      {translate.map((item, index) => {
        return (
          <li
            className="flex justify-center items-center text-slate-600 hover:text-slate-400 uppercase transition-all duration-300"
            key={index}
          >
            <Link href={item.lan}>
              <a className={item.lan === "es" ? "text-white font-medium" : ""}>
                {item.lan}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Translate;
