import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <a>
              <Image
                width={400}
                height={100}
                src="/img/logo.svg"
                alt="Imagen logo"
              />
            </a>
          </Link>

          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/carrito">
              <a>
                <Image
                  layout="fixed"
                  width={30}
                  height={25}
                  src="/img/carrito.png"
                  alt="Carrito"
                />
              </a>
            </Link>
          </nav>
        </div>
        {/**
   {guitarra && (
          <div className={styles.modelo}>
            <h2>Modelo {guitarra.nombre} </h2>
            <p>{guitarra.descripcion}</p>
            <p className={styles.precio}>
              {formatearCantidad(guitarra.precio)}
            </p>
            <Link href={`/guitarras/${guitarra.url}`}>
              <a className={styles.enlace}>Ver Producto</a>
            </Link>
          </div>
        )}


      {router.pathname === "/" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={styles.guitarra}
          src="/img/header_guitarra.png"
          alt="imagen header guitarra"
        />
      )}

 */}
      </div>
    </header>
  );
};

export default Header;
