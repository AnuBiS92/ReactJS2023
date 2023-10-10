import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
export const Counter = () => {
  const [contador, setContador] = useState(0); //Controla el estado de un elemento. Los cambios a lo largo del tiempo.
  const [open, setOpen] = useState(false);
  useEffect(() => {
    //Para que ocurra algo cada vez que cambia el estado de una variable.
    console.log("Cambió el contador"); //¿Qué tiene que pasar cuando cambie la variable que elijamos?
  }, [contador]); //¿En qué variable se tiene que detectar el cambio? Si está vacío se ejecuta cada vez que el componente se acople.
  return (
    <>
      <p>Contador:{contador}</p>
      <Button onClick={() => setContador(contador + 1)} variant="success">
        <b>SUMAR</b>
      </Button>
      <Button onClick={() => setContador(contador - 1)} variant="danger">
        <b>RESTAR</b>
      </Button>
      <br />
      <br />
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <Card style={{ width: "18rem" }} id="example-collapse-text">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Collapse>
    </>
  );
};
