import { useQuery } from "@apollo/client";
import { GetVacantsDocument } from "@service/graphql";

import VacantItem from "@components/Vacant/Item";
import GridCardUI from "@components/UI/Card/GridCard";

const Vacantes = () => {
  const { data } = useQuery(GetVacantsDocument);
  const vacants = data?.vacants?.vacants;

  return (
    <section className="bg-gray-100">
      <div className="container">
        <GridCardUI>
          {vacants?.map((vacant) => {
            const { available, details, id } = vacant;
            const { status } = details;
            return status ? (
              <div className={available ? "" : "opacity-50 cursor-default"}>
                <VacantItem item={vacant} key={id} />
              </div>
            ) : null;
          })}
        </GridCardUI>
      </div>
      {/* <h2 className="text-6xl">Vacantes</h2>
      <p className="text-md text-gray-500 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis
        laborum magnam sunt minima tempora officiis doloribus natus rerum.
        Assumenda!
      </p>
      {vacants?.map((vacant) => {
        const { available, details, id } = vacant;
        const { status } = details;
        return status ? (
          <div className={available ? "" : "opacity-50 cursor-default"}>
            <VacantItem item={vacant} key={id} />
          </div>
        ) : null;
      })} */}
      {/* <div className="">
        {vacants?.length === 0 ? (
          <div className="flex flex-col justify-center items-center pt-10">
            <p className="text-4xl">No hay vacantes disponibles.</p>
            <p className="text-slate-400 text-lg">
              Comunicate para tener mayor información
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-6xl">Vacantes</h2>
            <p className="text-md text-gray-500 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              nobis laborum magnam sunt minima tempora officiis doloribus natus
              rerum. Assumenda!
            </p>
            <div className="">
              {vacants?.map((vacant) => {
                const { available, details, id } = vacant;
                const { status } = details;
                return status ? (
                  <div className={available ? "" : "opacity-50 cursor-default"}>
                    <VacantItem item={vacant} key={id} />
                  </div>
                ) : null;
              })}
            </div>
          </>
        )}
      </div> */}
    </section>
  );
};

export default Vacantes;
