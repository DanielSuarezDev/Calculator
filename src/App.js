import { useEffect, useState } from "react";
import { ControlPresupuesto } from "./components/ControlPresupuesto";
import { Form } from "./components/Form";
import { Listado } from "./components/Listado";
import { Pregunta } from "./components/Pregunta";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

  useEffect(() => {
    if (crearGasto) {
      setGastos([...gastos, gasto]);
    }

    const presupuestoRest = restante - gasto.cantidad;
    setRestante(presupuestoRest);

    setCrearGasto(false);
  }, [gasto]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPregunta={setMostrarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form setGasto={setGasto} setCrearGasto={setCrearGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />

                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
