import { useRouter } from "next/router";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import {
  GetPurchaseSupplierDocument,
  ProductTypeService,
} from "@service/graphql";

import { MailIcon, PhoneIcon, GlobeIcon } from "@heroicons/react/solid";

const Proveedor = () => {
  const {
    query: { id },
  } = useRouter();
  const { data } = useQuery(GetPurchaseSupplierDocument, {
    variables: { supplierId: `${id}` },
  });
  const supplier = data?.supplier?.supplier;
  const address = supplier?.address;
  const streets = supplier?.address?.streets;
  const product = supplier?.productId;

  const Imagen = `https://picsum.photos/id/${Number(id) + 50}/300/300`;
  return (
    <>
      <div className="flex justify-between pr-10">
        <div>
          <h1 className="text-5xl text-gray-600 font-medium">
            Proveedor{" "}
            <span className="text-gray-800 font-bold">{supplier?.name}</span>
          </h1>
          <div className="flex gap-x-4">
            <div
              className={
                (supplier?.passed ? "border-green-400" : "border-red-400") +
                " border p-4 rounded-md my-4"
              }
            >
              <p>
                Proveedor{" "}
                <span
                  className={
                    (supplier?.passed ? "text-green-900" : "text-red-900") +
                    " font-bold"
                  }
                >
                  {supplier?.passed ? "Aprobado" : "No Aprobado"}
                </span>
              </p>
            </div>
            <div className="border p-4 rounded-md my-4">
              {supplier?.taxes?.type === "DIRECTO" ? (
                <p>
                  RFC <span className="font-bold">{supplier?.taxes?.rfc}</span>
                </p>
              ) : (
                "Indirecto"
              )}
            </div>
            <div
              className={
                (supplier?.classification === "A"
                  ? "border-green-400"
                  : supplier?.classification === "B"
                  ? "border-yellow-400"
                  : supplier?.classification === "C"
                  ? "border-red-400"
                  : "border-gray-200") + " border p-4 rounded-md my-4"
              }
            >
              <p>
                Aprobacion de tipo{" "}
                <span
                  className={
                    (supplier?.classification === "A"
                      ? "text-green-900"
                      : supplier?.classification === "B"
                      ? "text-yellow-900"
                      : supplier?.classification === "C"
                      ? "text-red-900"
                      : "text-gray-900") + " font-bold"
                  }
                >
                  {supplier?.classification}
                </span>
              </p>
            </div>
            <div className="border p-4 rounded-md my-4">
              <p>
                Tiempo estimado de entrega{" "}
                <span className="font-bold">
                  {supplier?.deliveryTime} día(s)
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image className="rounded-xl" src={Imagen} height={300} width={300} />
        </div>
      </div>
      <div className="border p-4 rounded-md my-4">
        <h2 className="text-gray-600 font-bold">Direccion:</h2>
        <div className="ml-4">
          <p>
            #{address?.number?.exterior} - {address?.number?.interior},{" "}
            {address?.street}, {address?.colony}, {address?.municipality},{" "}
            {address?.state}, {address?.country}, {address?.zipCode}
          </p>
          {streets?.a || streets?.b ? (
            <span className="text-gray-400">
              (Entre {address?.streets?.a} y {address?.streets?.b} )
            </span>
          ) : null}
        </div>
      </div>
      <div className="border p-4 rounded-md my-4">
        <h2 className="text-gray-600 font-bold">Contacto:</h2>
        <div className="ml-4">
          <p className="flex items-center gap-x-2">
            <MailIcon className="h-4" /> {supplier?.infoContact?.email}
          </p>
          <p className="flex items-center gap-x-2">
            <PhoneIcon className="h-4" />
            {supplier?.infoContact?.phone}
          </p>
          <p className="flex items-center gap-x-2">
            <GlobeIcon className="h-4" />
            {supplier?.infoContact?.web}
          </p>
          {supplier?.infoContact?.personalizedContact ? (
            <div className="border p-4 rounded-md my-4">
              <h2 className="text-gray-600 font-bold">
                {" "}
                {supplier.infoContact.personalizedContact.name}{" "}
              </h2>
              <div className="ml-4">
                <p className="flex items-center gap-x-2">
                  <MailIcon className="h-4" />{" "}
                  {supplier?.infoContact?.personalizedContact.email}
                </p>
                <p className="flex items-center gap-x-2">
                  <PhoneIcon className="h-4" />
                  {supplier?.infoContact?.personalizedContact.phone}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-center text-gray-500">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tipo
              </th>
              <th scope="col" className="px-6 py-3">
                Producto
              </th>
              <th scope="col" className="px-6 py-3">
                Descripcion
              </th>
              <th scope="col" className="px-6 py-3">
                Marca
              </th>
              <th scope="col" className="px-6 py-3">
                Auditable
              </th>
            </tr>
          </thead>
          {product?.map((product) => {
            const { id, name, description, brand, audited, typeService } =
              product!;
            return (
              <tbody key={id}>
                <tr className="bg-white">
                  <td className="px-6 py-4">
                    {typeService ? `Servicio ${typeService.type}` : "Producto"}
                  </td>
                  <th
                    scope="row"
                    className="text-md px-6 py-4 font-bold whitespace-nowrap"
                  >
                    {name}
                  </th>
                  <th
                    scope="row"
                    className="text-md px-6 py-4 font-bold whitespace-nowrap"
                  >
                    {description}
                  </th>
                  <td className={(brand ? "" : "text-gray-400") + " px-6 py-4"}>
                    {brand ? brand : "N/A"}
                  </td>
                  <td
                    className={
                      (audited ? "text-green-400" : "text-red-400") +
                      " font-bold px-6 py-4 tracking-wider"
                    }
                  >
                    {audited ? "SI" : "NO"}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Proveedor;

/* {supplier?.productId?.map(async ({id, name, description, brand, audited typeService}) => {
            const typService: ProductTypeService = typeService;
            return await (
              <tbody key={id}>
                <tr className="bg-white">
                  <td className="px-6 py-4">
                    {typeService ? `Servicio ${typService.type}` : 'Producto'}
                  </td>
                  <th
                    scope="row"
                    className="text-md px-6 py-4 font-bold whitespace-nowrap"
                  >
                    {name}
                  </th>
                  <th
                    scope="row"
                    className="text-md px-6 py-4 font-bold whitespace-nowrap"
                  >
                    {description}
                  </th>
                  <td className={(brand ? '' : 'text-gray-400') + ' px-6 py-4'}>
                    {brand ? brand : 'N/A'}
                  </td>
                  <td
                    className={
                      (audited ? 'text-green-400' : 'text-red-400') +
                      ' font-bold px-6 py-4 tracking-wider'
                    }
                  >
                    {audited ? 'SI' : 'NO'}
                  </td>
                </tr>
              </tbody>
            );
          })} */
