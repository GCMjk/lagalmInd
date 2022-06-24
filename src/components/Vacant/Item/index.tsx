import { useQuery } from "@apollo/client";
import { GetVacantDocument } from "@service/graphql";

import RrhhForm from "@components/Forms/Rrhh";

const VacantItem = () => {
  const { data } = useQuery(GetVacantDocument);
  console.log(data);

  return (
    <>
      <p>Vacante</p>
      <RrhhForm />
    </>
  );
};

export default VacantItem;
