import { useRouter } from "next/router";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Lagalm</title>
        <meta
          name="description"
          content="Lagalm, soluciones integrales en inyección de plástico."
        />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <Header />
      <div style={{ height: "1000px" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
