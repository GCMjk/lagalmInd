import { useQuery } from "@apollo/client";
import { GetPurchaseSuppliersDocument } from "@service/graphql";

import CardUI from "@UI/Card/App";
import TableUI from "@UI/Table";

const Proveedores = () => {
  const { data } = useQuery(GetPurchaseSuppliersDocument);
  const suppliersData = data?.suppliers?.suppliers;

  const suppliers = suppliersData?.map(
    ({
      id,
      name,
      taxes,
      infoContact,
      address: addressProvider,
      passed: passedProvider,
      classification,
    }) => {
      const tax = taxes?.type === "DIRECTO" ? taxes.rfc : "Indirecto";
      const email = infoContact?.email;
      const address = `${addressProvider?.street}  #${addressProvider?.number?.exterior}, ${addressProvider?.colony}, ${addressProvider?.municipality}`;
      const passed = passedProvider ? "Si" : "No";
      return {
        ID: id,
        Nombre: name,
        Impuestos: tax,
        Correo: email,
        Dirección: address,
        Aprobado: passed,
        Clasificación: classification,
      };
    }
  ) as object[];

  return (
    <>
      <h1 className="text-5xl text-gray-800 font-bold mb-5">
        Listado de proveedores
      </h1>

      <CardUI
        title="Proveedores"
        description="Registro de proveedores"
        addButton="Agregar proveedor"
        linkButton="/proveedores"
        inputSearch="proveedores "
      >
        <TableUI collection={suppliers || [{}]} />
      </CardUI>
    </>
  );
};

export default Proveedores;
