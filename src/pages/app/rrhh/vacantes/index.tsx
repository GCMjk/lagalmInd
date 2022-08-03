import { useQuery } from "@apollo/client";
import { GetRrhhVacantsDocument } from "@service/graphql";

import CardUI from "@UI/Card/App";
import TableUI from "@UI/Table";

const RrhhVacantes = () => {
  const { data } = useQuery(GetRrhhVacantsDocument);
  const vacantsData = data?.vacants?.vacants;

  const vacants = vacantsData?.map(
    ({ id, title, available: availableVacant, jobId }) => {
      const { title: titleJob, description: descriptionJob } = jobId;
      const available = availableVacant ? "Disponible" : "No disponible";
      return {
        ID: id,
        Titulo: title,
        Descripción: descriptionJob,
        Trabajo: titleJob,
        Disponibilidad: available,
      };
    }
  ) as object[];

  return (
    <>
      <h1 className="text-5xl text-gray-800 font-bold mb-5">
        Listado de vacantes
      </h1>

      <CardUI
        title="Vacantes"
        description="Registro de vacantes"
        addButton="Agregar vacantes"
        linkButton="/vacantes"
        inputSearch="vacantes "
      >
        <TableUI collection={vacants || [{}]} />
      </CardUI>
    </>
  );
};
export default RrhhVacantes;
