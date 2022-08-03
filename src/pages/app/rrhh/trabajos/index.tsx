import { useQuery } from "@apollo/client";
import { GetRrhhJobsDocument } from "@service/graphql";

import CardUI from "@UI/Card/App";
import TableUI from "@UI/Table";

const RrhhTrabajos = () => {
  const { data } = useQuery(GetRrhhJobsDocument);
  const jobsData = data?.jobs?.jobs;

  const jobs = jobsData?.map(({ id, title, description }) => {
    return {
      ID: id,
      Titulo: title,
      Descripción: description,
    };
  }) as object[];

  return (
    <>
      <h1 className="text-5xl text-gray-800 font-bold mb-5">
        Listado de trabajos
      </h1>

      <CardUI
        title="Trabajos"
        description="Registro de trabajos para vacantes"
        inputSearch="trabajos "
      >
        <TableUI collection={jobs || [{}]} />
      </CardUI>
    </>
  );
};
export default RrhhTrabajos;
