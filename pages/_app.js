import { useState, useEffect } from "react";
import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
    setCarrito(carritoLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (producto) => {
    setLoading(true);
    if (carrito.some((prod) => prod._id === producto._id)) {
      const carritoActualizado = carrito.map((prod) => {
        if (prod._id === producto._id) {
          prod.cantidad = producto.cantidad;
        }
        return prod;
      });
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, producto]);
    }
    setLoading(false);
  };

  const actualizarCantidad = (producto) => {
    const carritoActualizado = carrito.map((prod) => {
      if (prod._id === producto._id) {
        prod.cantidad = producto.cantidad;
      }
      return prod;
    });

    setCarrito(carritoActualizado);
  };

  const eliminarProducto = (id) => {
    setLoading(true);
    const carritoActualizado = carrito.filter(
      (articulo) => articulo._id !== id
    );
    setCarrito(carritoActualizado);
    setLoading(false);
  };

  return (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      actualizarCantidad={actualizarCantidad}
      eliminarProducto={eliminarProducto}
      setCarrito={setCarrito}
      loading={loading}
    />
  );
}

export default MyApp;
