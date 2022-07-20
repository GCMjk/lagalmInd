import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { RrhhVacant } from "@service/graphql";

const VacantItem = ({ vacantItem }: { vacantItem: RrhhVacant }) => {
  const { id, title, description, available } = vacantItem;
  return (
    <div className="card">
      <div className="card-img">
        <Image
          className="card-img__img"
          src="https://picsum.photos/id/4/600"
          layout="fill"
          alt={title}
        />
      </div>
      <div className="card-content">
        <div className="mb-2">
          <span
            className={
              "card-content__badge " +
              (available
                ? "card-content__badge--green"
                : "card-content__badge--red")
            }
          >
            {available ? "Disponible" : "No disponible"}
          </span>
        </div>

        <h2 className="card-content__title">{title}</h2>
        <p className="card-content__description">{description}</p>
        <div className="card-content__buttons">
          {available ? (
            <>
              {" "}
              <Link href={`vacant/${id}`}>
                <a className="btn md:btn--md btn--hover">Enviar solicitud</a>
              </Link>
              <Link href={`/vacant`}>
                <a className="text-2xl - btn btn--outline--hover md:btn--md">
                  <BsArrowRight />
                </a>
              </Link>
            </>
          ) : (
            <div className="border-white shadow-none - btn btn--outline md:btn--md">
              No disponible
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VacantItem;
