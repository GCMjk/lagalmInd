import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GetVacantDocument, RrhhVacant } from "@service/graphql";

import VacantDetails from "@components/Vacants/Details";
import RrhhForm from "@components/Forms/Rrhh";

const Vacant = () => {
  const {
    query: { id },
  } = useRouter();
  const vacantId = id as string;
  const { data } = useQuery(GetVacantDocument, {
    variables: {
      vacantId,
    },
  });
  const vacant = data?.vacant?.vacant;
  console.log(vacant);

  return (
    <>
      {vacant?.available ? (
        <VacantDetails item={vacant} />
      ) : (
        <p>La vacante no esta disponible</p>
      )}
      <div className={vacant?.available ? "" : "opacity-50 cursor-default"}>
        <RrhhForm vacantId={`${vacantId}`} />
      </div>
    </>
  );
};

export default Vacant;
