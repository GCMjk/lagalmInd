import { useQuery } from "@apollo/client";
import { GetVacantsDocument } from "@service/graphql";

const VacantList = () => {
  const { data } = useQuery(GetVacantsDocument);
  console.log(data);

  return (
    <>
      <p>Lista de Vacantes</p>
      <p> Titulo </p>
    </>
  );
};

export default VacantList;
