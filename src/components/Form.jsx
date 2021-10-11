import React, { useState } from "react";
import { Error } from "./Error";
import shortid from "shortid";

export const Form = ({ setGasto, setCrearGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [erro, setErro] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setErro(true);
      return;
    }

    setErro(false);

    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    setGasto(gasto);
    setCrearGasto(true);

    setNombre("");
    setCantidad(0);
  };
  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>

      {erro ? (
        <Error msg="campos obligatorios o presupuesto incorrecto" />
      ) : null}

      <div className="campo">
        <label>Nonbre gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};
