import { useQuery } from "@apollo/client";
import { GetVacantsDocument } from "@service/graphql";

import VacantItem from "@components/Vacant/Item";

const Vacants = () => {
  const { data } = useQuery(GetVacantsDocument);
  const vacants = data?.vacants?.vacants;
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto flex flex-col items-center text-center py-32 gap-4">
        {vacants?.length === 0 ? (
          <div className="flex flex-col justify-center items-center pt-10">
            <p className="text-paragraph text-4xl">
              No hay vacantes disponibles.
            </p>
            <p className="text-slate-400 text-lg">
              Comunicate para tener mayor información
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-6xl text-paragraph">Vacantes</h2>
            <p className="text-md text-gray-500 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              nobis laborum magnam sunt minima tempora officiis doloribus natus
              rerum. Assumenda!
            </p>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {vacants?.map((vacant) => {
                const { available, details } = vacant;
                const { status } = details;
                return status ? (
                  <div className={available ? "" : "opacity-50 cursor-default"}>
                    <VacantItem vacantItem={vacant} key={vacant.id} />
                  </div>
                ) : null;
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Vacants;
