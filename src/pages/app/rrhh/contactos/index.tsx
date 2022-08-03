import { useQuery } from "@apollo/client";
import { GetRrhhContactsDocument } from "@service/graphql";
import moment from "moment";
import "moment/locale/es";

import CardUI from "@UI/Card/App";
import TableUI from "@UI/Table";

const RrhhContactos = () => {
  const { data } = useQuery(GetRrhhContactsDocument);
  const contactsData = data?.contacts?.contacts;

  const contacts = contactsData?.map(
    ({
      id,
      name,
      email,
      attended: attendedContact,
      creationDate: creationDateContact,
    }) => {
      const attended = attendedContact ? "Atendido" : "No atendido";
      const creationDate = moment(creationDateContact).format(
        "dddd, MMMM DD HH:mm a"
      );
      return {
        ID: id,
        Nombre: name,
        Correo: email,
        Atendido: attended,
        Fecha: creationDate,
      };
    }
  ) as object[];

  console.log(data);

  return (
    <>
      <h1 className="text-5xl text-gray-800 font-bold mb-5">
        Listado de contactos
      </h1>

      <CardUI
        title="Contactos"
        description="Registro de contactos"
        inputSearch="contactos "
      >
        <TableUI collection={contacts || [{}]} />
      </CardUI>
    </>
  );
};
export default RrhhContactos;
