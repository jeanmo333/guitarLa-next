import { useState } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import { formatearCantidad } from "../../helpers";
import styles from "../../styles/Guitarra.module.css";

const Producto = ({ guitarra, agregarCarrito }) => {
  const { nombre, descripcion, imagen, precio, _id } = guitarra[0];
  const [cantidad, setCantidad] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Cantidad no valida");
      return;
    }

    //agregando al carrito
    const guitarraSelecionada = {
      _id,
      imagen: imagen.url,
      nombre,
      precio,
      cantidad,
    };

    agregarCarrito(guitarraSelecionada);
  };

  return (
    <Layout pagina={`guitara ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          layout="responsive"
          width={180}
          height={350}
          src={imagen.url}
          alt={`Imagen guitarra ${nombre}`}
        />

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>{formatearCantidad(precio)}</p>

          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label>Cantidad</label>
            <select
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            >
              <option value="0">--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Agregar Al Carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
  const respuesta = await fetch(urlGuitarra);
  const guitarra = await respuesta.json();
  console.log(guitarra);
  return {
    props: {
      guitarra,
    },
  };
}

export default Producto;
