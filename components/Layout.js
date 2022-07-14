import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pagina, guitarra }) => {
  return (
    <div>
      <Head>
        <title>GuitarLa - {pagina}</title>
        <meta name="description" content="Sitio Web de venta de Guitarras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header guitarra={guitarra} />

      {children}

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitarra: null,
};

export default Layout;
