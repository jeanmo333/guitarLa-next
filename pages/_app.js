import { useState, useEffect } from "react";
import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
    setCarrito(carritoLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (producto) => {
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
    const carritoActualizado = carrito.filter(
      (articulo) => articulo._id !== id
    );
    setCarrito(carritoActualizado);
  };

  return (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      actualizarCantidad={actualizarCantidad}
      eliminarProducto={eliminarProducto}
      setCarrito={setCarrito}
    />
  );
}

export default MyApp;
