import Head from "next/head";
import Header from "@components/Web/Header";
import Footer from "@components/Web/Footer";

import Logo from "@assets/img/logo.svg";

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
        <link rel="shortcut icon" href={Logo} type="image/x-icon" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
