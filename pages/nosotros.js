import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Imagen sobre Nosotros"
          />

          <div className="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              imperdiet enim non velit tristique, ultrices pretium magna
              vulputate. Vivamus tincidunt justo ante, a lacinia odio pulvinar
              sed. Nulla fringilla eleifend sapien. Etiam eu iaculis dolor.
              Suspendisse ut laoreet tellus. Morbi convallis ornare nunc eu
              scelerisque. Phasellus scelerisque elit id vehicula vehicula. In
              hendrerit nibh ac urna porta lacinia. Donec nibh felis, ultrices
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              imperdiet enim non velit tristique, ultrices pretium magna
              vulputate. Vivamus tincidunt justo ante, a lacinia odio pulvinar
              sed. Nulla fringilla eleifend sapien. Etiam eu iaculis dolor.
              Suspendisse ut laoreet tellus. Morbi convallis ornare nunc eu
              scelerisque. Phasellus scelerisque elit id vehicula vehicula. In
              hendrerit nibh ac urna porta lacinia. Donec nibh felis, ultrices
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
