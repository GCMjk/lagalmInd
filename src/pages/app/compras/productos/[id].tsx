import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GetPurchaseProductDocument } from "@service/graphql";

const Producto = () => {
  const {
    query: { id },
  } = useRouter();
  const { data } = useQuery(GetPurchaseProductDocument, {
    variables: { productId: `${id}` },
  });
  const product = data?.product?.product;
  return (
    <>
      <h1 className="text-5xl text-gray-800 font-bold">
        Producto {product?.name}, {product?.description}
      </h1>
    </>
  );
};

export default Producto;
