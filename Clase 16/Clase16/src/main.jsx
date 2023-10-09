import React from "react";
import ReactDOM from "react-dom/client";
import { Counter } from "./Counter.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Counter />
  </>
);
