import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
export const Counter = () => {
  const [contador, setContador] = useState(0); //Controla el estado de un elemento. Los cambios a lo largo del tiempo.
  useEffect(() => {
    //Para que ocurra algo cada vez que cambia el estado de una variable.
    console.log("Cambió el contador"); //¿Qué tiene que pasar cuando cambie la variable que elijamos?
  }, [contador]); //¿En qué variable se tiene que detectar el cambio? Si está vacío se ejecuta cada vez que el componente se acople.
  return (
    <>
      <p>Contador:{contador}</p>
      <button onClick={() => setContador(contador + 1)} variant="success">
        +
      </button>
      <button onClick={() => setContador(contador - 1)} variant="danger">
        -
      </button>
    </>
  );
};
