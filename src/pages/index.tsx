/* import { useQuery } from "@apollo/client";
import { GetSaleCustomersDocument, SaleCustomer } from "@service/graphql";
import Customers from "@components/Web/Home/Customers"; */

import Hero from "@components/Web/Home/Hero";

const Home = () => {
  /* const { data } = useQuery(GetSaleCustomersDocument);
  const customers = data?.customers?.customers as SaleCustomer[]; */
  return (
    <>
      <Hero />
      {/* <Customers customers={customers} /> */}
    </>
  );
};

export default Home;
