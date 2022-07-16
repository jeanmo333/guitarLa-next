import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Carrito.module.css";
import Image from "next/image";
import { formatearCantidad } from "../helpers";

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <Layout pagina="Carrito de Compras">
      <h1 className="heading">Carrito de Compras</h1>

      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
          {carrito.length === 0 ? (
            <p className={styles.vacio}>carrito vacio</p>
          ) : (
            carrito.map((producto) => (
              <div key={producto._id} className={styles.producto}>
                <div>
                  <Image
                    layout="responsive"
                    width={250}
                    height={500}
                    src={producto.imagen}
                    alt={producto.nombre}
                  />
                </div>

                <div>
                  <p className={styles.nombre}>{producto.nombre}</p>
                  <div className={styles.cantidad}>
                    <p> Cantidad:</p>
                    <select
                      value={producto.cantidad}
                      className={styles.select}
                      onChange={(e) =>
                        actualizarCantidad({
                          cantidad: e.target.value,
                          _id: producto._id,
                        })
                      }
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>

                  <p className={styles.precio}>
                    <span>{formatearCantidad(producto.precio)}</span>
                  </p>

                  <p className={styles.subTotal}>
                    Subtotal :{" "}
                    <span>
                      {formatearCantidad(producto.precio * producto.cantidad)}
                    </span>
                  </p>
                </div>

                <button
                  type="button"
                  className={styles.eliminar}
                  onClick={() => eliminarProducto(producto._id)}
                >
                  X
                </button>
              </div>
            ))
          )}
        </div>

        <div className={styles.resumen}>
          {total > 0 ? (
            <>
              <h3>Resumen del Pedido</h3>
              <p>Total a pagar: {formatearCantidad(total)}</p>
            </>
          ) : (
            <p>Resumen va Aparecer Aqui</p>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
