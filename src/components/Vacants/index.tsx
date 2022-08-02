import CardUI from "@components/UI/Card";
import GridUI from "@components/UI/Grid";
import { RrhhVacant } from "@service/graphql";

const Vacants = ({ vacants }: { vacants?: RrhhVacant[] }) => {
  const title = "Vacantes";
  const sub = ["Vacantes disponibles", "Vacantes no disponibles"];
  const description = [
    "Encuentra una vacante en nuestro listado de puestos disponibles, podrás revisar la información de la vacante y aspirar para ella, bríndanos tu información de contacto.",
    "Regresa pronto, por el momento no disponemos de alguna vacante para ti.",
  ];
  const statusVacant = vacants?.map(({ details: { status } }) => {
    return status;
  });
  return (
    <GridUI
      title={title}
      sub={statusVacant?.some((status) => status === true) ? sub[0] : sub[1]}
      description={
        statusVacant?.some((status) => status === true)
          ? description[0]
          : description[1]
      }
    >
      {vacants?.map(
        ({
          id,
          title,
          available: { available },
          jobId: { description, image },
          details: { status },
        }) =>
          status ? (
            <CardUI
              disabled={available ? true : false}
              key={id}
              image={`${image}`}
              badget={{
                color: available ? "Green" : "Red",
                text: available ? "Disponible" : "No disponible",
              }}
              title={title}
              description={description as string}
              button={{
                text: available ? "Enviar solicitud" : "No disponible",
                style: available ? "Basic" : "White",
                size: "Large",
                link: `vacantes/${id}`,
              }}
            />
          ) : null
      )}
    </GridUI>
  );
};

export default Vacants;
