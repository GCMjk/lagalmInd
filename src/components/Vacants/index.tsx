import CardUI from "@components/UI/Card";
import GridCardUI from "@components/UI/Card/GridCard";
import { RrhhVacant } from "@service/graphql";

const Vacants = ({ vacants }: { vacants?: RrhhVacant[] }) => {
  return (
    <GridCardUI>
      <CardUI
        image={`${image}`}
        badget={{
          color: available ? "green" : "red",
          text: available ? "Disponible" : "No disponible",
        }}
        title={title}
        description={description}
        button={{
          text: available ? "Enviar solicitud" : "No disponible",
          style: available ? "Basic" : "White",
          size: "Large",
          link: `vacantes/${id}`,
        }}
      />
    </GridCardUI>
  );
};

export default Vacants;
