import { useQuery } from "@apollo/client";
import { GetPurchaseProductsDocument } from "@service/graphql";

import CardUI from "@UI/Card/App";
import TableUI from "@UI/Table";

const Productos = () => {
  const { data } = useQuery(GetPurchaseProductsDocument);
  const productsData = data?.products?.products;

  const products = productsData?.map(
    ({
      id,
      name,
      brand: brandProduct,
      audited: auditedProduct,
      description,
      typeService: typeServiceService,
    }) => {
      const brand = brandProduct ? brandProduct : "N/A";
      const audited = auditedProduct ? "Si" : "No";
      const typeService = typeServiceService
        ? `Servicio ${typeServiceService.type}`
        : "Producto";
      return {
        ID: id,
        Nombre: name,
        Marca: brand,
        Auditable: audited,
        Descripción: description,
        Tipo: typeService,
      };
    }
  ) as object[];

  return (
    <>
      <h1 className="text-5xl text-gray-800 font-bold mb-5">
        Listado de productos
      </h1>

      <CardUI
        title="Productos"
        description="Registro de productos"
        addButton="Agregar producto"
        linkButton="/productos"
        inputSearch="productos "
      >
        <TableUI collection={products || [{}]} />
      </CardUI>
    </>
  );
};

export default Productos;
