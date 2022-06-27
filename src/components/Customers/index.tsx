import Image from "next/image";
import { customers } from "@service/data";

const Customers = () => {
  return (
    <section className="flex items-center bg-slate-100 min-h-[146px]">
      <div className="container mx-auto flex justify-center items-center flex-wrap lg:justify-between">
        {customers.map(({ name, img, href }, index) => {
          return (
            <div key={index} className="p-2">
              <a href={href} target="_blank" rel="noreferrer">
                <Image src={img} width={100} height={30} alt={name} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Customers;
