import React from "react";

export const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <>
      <div className="alert alert-primary">presupuesto: {presupuesto}</div>
      <div className="alert ">Restante: {restante}</div>
    </>
  );
};
