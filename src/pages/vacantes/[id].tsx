import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GetRrhhVacantDocument, RrhhVacant } from "@service/graphql";

import Vacant from "@components/Web/Vacants/Vacant";
import ContainerUI from "@components/UI/Container/intex";

const Vacante = () => {
  const {
    query: { id },
  } = useRouter();
  const vacantId = id as string;
  const { data } = useQuery(GetRrhhVacantDocument, {
    variables: {
      vacantId,
    },
  });
  const vacant = data?.vacant?.vacant as RrhhVacant;

  return (
    <>
      {vacant?.details.status ? (
        <Vacant vacant={vacant || {}} />
      ) : (
        <ContainerUI>
          <h1 className="text-4xl">No existe la vacante</h1>
          <p className="text-xl">Intenta buscando de nuevo</p>
        </ContainerUI>
      )}
    </>
  );
};

export default Vacante;
