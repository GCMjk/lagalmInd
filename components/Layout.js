import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({children, page}) => {
  return (
    <div>
      <Head>
        <title>Lagalm - {page}</title>
        <meta name='description' content='Lagalm, soluciones integrales en inyección de plástico.' />
        <link rel='shortcut icon' href='favicon.ico' />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;