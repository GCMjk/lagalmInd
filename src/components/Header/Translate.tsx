import Link from "next/link";
import Image from "next/image";

import { translate } from "@service/data";

const Translate = ({ bg }: { bg: boolean }) => {
  const language = false;
  const es = translate.filter((index) => {
    return index.lan === "es";
  });
  const en = translate.filter((index) => {
    return index.lan === "en";
  });

  return (
    <>
      {language
        ? es.map(({ lan, icon }, index) => {
            return (
              <Link href={lan} key={index}>
                <a
                  className={
                    (bg ? "" : "opacity-20") +
                    " flex transition-all duration-300"
                  }
                >
                  <Image
                    src={icon}
                    height="25"
                    width="25"
                    alt={`Icon ${lan}`}
                  />
                </a>
              </Link>
            );
          })
        : en.map(({ lan, icon }, index) => {
            return (
              <Link href={lan} key={index}>
                <a
                  className={
                    (bg ? "" : "opacity-20") +
                    " flex transition-all duration-300"
                  }
                >
                  <Image
                    src={icon}
                    height="25"
                    width="25"
                    alt={`Icon ${lan}`}
                  />
                </a>
              </Link>
            );
          })}
    </>
  );
};

export default Translate;
