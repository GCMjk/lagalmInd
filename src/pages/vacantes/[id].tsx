import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GetVacantDocument, RrhhVacant } from "@service/graphql";

import Vacant from "@components/Vacants/Vacant";
import ContainerUI from "@components/UI/Container/intex";

const Vacante = () => {
  const {
    query: { id },
  } = useRouter();
  const vacantId = id as string;
  const { data } = useQuery(GetVacantDocument, {
    variables: {
      vacantId,
    },
  });
  const vacant = data?.vacant?.vacant as RrhhVacant;

  return (
    <ContainerUI>
      {vacant?.details.status ? (
        <Vacant vacant={vacant || {}} />
      ) : (
        <div className="text-center space-y-2">
          <h1 className="text-4xl">No existe la vacante</h1>
          <p className="text-xl">Intenta buscando de nuevo</p>
        </div>
      )}
    </ContainerUI>
  );
};

export default Vacante;
