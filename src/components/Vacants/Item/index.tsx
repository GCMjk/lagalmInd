import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { RrhhVacant } from "@service/graphql";
import CardUI from "@components/UI/Card";

const VacantItem = ({ item }: { item: Object }) => {
  const vacant = item as RrhhVacant;
  const { id, title, description, available, jobId } = vacant;
  const { image } = jobId;
  return (
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
  );
};

export default VacantItem;
