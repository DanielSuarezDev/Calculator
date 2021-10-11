import React, { useState } from "react";
import { Error } from "./Error";

export const Pregunta = ({
  setPresupuesto,
  setRestante,
  setMostrarPregunta,
}) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handlePresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    setError(false);

    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarPregunta(false);
  };
  return (
    <>
      <h2>Ingresa tu presupuesto</h2>
      {error ? <Error msg="El presupuesto es incorrecto" /> : null}

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ingresa tu presupuesto"
          onChange={handlePresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          placeholder="Definir presupuesto"
        />
      </form>
    </>
  );
};
