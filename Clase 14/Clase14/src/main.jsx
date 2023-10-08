import React from "react";
import ReactDOM from "react-dom/client";
import Boton from "./assets/Boton";
import Card from "./assets/Card";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Card
      apellido="Messi"
      nacimiento={1987}
      clubes={["Newells", " Barcelona", " PSG", " Inter Miami"]}
      mundial={true}
      late={true}
    />
    <Card
      apellido="Ronaldo"
      nacimiento={1987}
      clubes={[
        "Sporting Lisboa",
        " Manchester United",
        " Real Madrid",
        " Juventus",
        " Al Nassr",
      ]}
      mundial={false}
      late={false}
    />
  </>
);
