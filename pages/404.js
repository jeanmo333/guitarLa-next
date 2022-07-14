import Link from "next/link";

import styles from "../styles/NoEncontrado.module.css";

const NoEncontrado = () => {
  return (
    <div className={styles.no_encontrado}>
      <h1 className="heading">Pagina No Encontrada</h1>

      <Link href="/">Volver Al Inicio</Link>
    </div>
  );
};

export default NoEncontrado;
