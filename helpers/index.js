export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);

  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return fechaNueva.toLocaleDateString("es-ES", options);
};

export const formatearCantidad = (cantidad) => {
  return cantidad.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });
};
