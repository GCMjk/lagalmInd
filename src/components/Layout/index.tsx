import { useRouter } from "next/router";

import Head from "next/head";
import Header from "@components/Web/Header";
import Footer from "@components/Web/Footer";

import Navbar from "@components/App/Navbar";
import Sidebar from "@components/App/Sidebar";

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
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/lagalm/image/upload/v1660168772/logo_nvfgba.png"
          type="image/svg"
        />
      </Head>
      {router.pathname !== "/app/login" && router.pathname.includes("/app") ? (
        <div className="flex bg-white">
          <Sidebar />
          <div className="flex h-screen flex-1 flex-col">
            <Navbar />
            <main className="p-8 overflow-scroll h-full">{children}</main>
          </div>
          {/* <aside className="hidden md:block h-screen w-[300px] shadow-lg"></aside> */}
        </div>
      ) : router.pathname === "/app/login" ? (
        children
      ) : (
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
