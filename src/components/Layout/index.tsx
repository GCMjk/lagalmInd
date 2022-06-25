import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

import Logo from "../../public/lagalm.svg";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Lagalm</title>
        <meta
          name="description"
          content="Lagalm, soluciones integrales en inyección de plástico."
        />
        <link rel="shortcut icon" href={Logo} />
      </Head>
      <Header />
      <div style={{ height: "1000px" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
