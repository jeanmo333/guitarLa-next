import styles from "../styles/Curso.module.css";

const Curso = ({ curso }) => {
  const { titulo, contenido, imagen } = curso;
  return (
    <section className={`${styles.curso} contenedor `}>
      <div className={styles.contenido}>
        <div className={`contenedor ${styles.grid}`}>
          <h2>{titulo}</h2>
          <p>{contenido}</p>

          <a className={styles.enlace} href="#">
            Mas Informacion
          </a>
        </div>
      </div>
    </section>
  );
};

export default Curso;
