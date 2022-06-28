import Link from "next/link";

import { socials } from "@service/data";

const Socials = ({ bg }: { bg: boolean }) => {
  return (
    <div className="flex justify-center items-center space-x-6">
      {socials.map(({ icon, href }, index) => {
        return (
          <Link href={href} key={index}>
            <a
              className={(bg ? "text-tertiary" : "text-white") + " text-lg"}
              target="_blank"
            >
              {icon}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
