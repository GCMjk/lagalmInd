import Image from "next/image";
import Link from "next/link";
import { SaleCustomer } from "@service/graphql";

const Customers = ({ customers }: { customers?: SaleCustomer[] }) => {
  return (
    <section className="flex items-center bg-slate-100 min-h-[146px]">
      <div className="container mx-auto flex justify-center items-center flex-wrap md:justify-between gap-x-6">
        {customers?.map(
          ({ id, name, infoContact, logo, details: { status } }) => {
            return status ? (
              <Link key={id} href={infoContact?.web!}>
                <a
                  className="relative w-24 h-14 lg:w-32 lg:h-18"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="object-contain"
                    src={logo!}
                    layout="fill"
                    alt={name}
                  />
                </a>
              </Link>
            ) : null;
          }
        )}
      </div>
    </section>
  );
};

export default Customers;
