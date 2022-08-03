import { useQuery } from "@apollo/client";
import { GetRrhhVacantsDocument, RrhhVacant } from "@service/graphql";

import ContainerUI from "@components/UI/Container/intex";
import Vacants from "@components/Web/Vacants";

const Vacantes = () => {
  const { data } = useQuery(GetRrhhVacantsDocument);
  const vacants = data?.vacants?.vacants as RrhhVacant[];

  return (
    <ContainerUI>
      <Vacants vacants={vacants} />
    </ContainerUI>
  );
};

export default Vacantes;
