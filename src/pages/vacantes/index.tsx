import { useQuery } from "@apollo/client";
import { GetVacantsDocument, RrhhVacant } from "@service/graphql";

import ContainerUI from "@components/UI/Container/intex";
import Vacants from "@components/Web/Vacants";

const Vacantes = () => {
  const { data } = useQuery(GetVacantsDocument);
  const vacants = data?.vacants?.vacants as RrhhVacant[];

  return (
    <ContainerUI>
      <Vacants vacants={vacants} />
    </ContainerUI>
  );
};

export default Vacantes;
