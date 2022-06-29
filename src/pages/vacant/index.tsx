import type { GetStaticProps, InferGetStaticPropsType } from "next";
import client from "@service/client";

import { GetVacantsDocument, Vacant } from "@service/graphql";
import VacantList from "@components/Vacant/Item";

export const getStaticProps: GetStaticProps<{
  vacants: Vacant[];
}> = async () => {
  try {
    const response = await client.query({
      query: GetVacantsDocument,
    });

    if (!response.data.vacants?.status) {
      return {
        props: {
          vacants: [],
        },
      };
    }

    const vacants = response.data.vacants?.vacants as Vacant[];

    return {
      props: {
        vacants,
      },
    };
  } catch (e) {
    return {
      props: {
        vacants: [],
      },
    };
  }
};
const Vacants = ({
  vacants,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto flex flex-col items-center text-center py-32 gap-4">
        {vacants.length == 0 ? (
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
                const { status, available } = vacant;
                return status ? (
                  <div className={available ? "" : "opacity-50 cursor-default"}>
                    <VacantList vacantItem={vacant} key={vacant.id} />
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
