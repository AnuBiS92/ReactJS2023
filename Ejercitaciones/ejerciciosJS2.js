const obtenerMayor = (x, y) => {
  return x == y ? x : Math.max(x, y);
};
console.log(obtenerMayor(8, 9));

const mayoriaDeEdad = (edad) => {
  return edad >= 18 ? "Allowed" : "Not allowed";
};
console.log(mayoriaDeEdad(12));

const connection = (status) => {
  switch (status) {
    case 1:
      return "Online";
    case 2:
      return "Away";
    default:
      return "Offline";
  }
};
console.log(connection(1));

const saludo = (idioma) => {
  switch (idioma.toLowerCase()) {
    case "aleman":
      return "Guten Tag!";
    case "mandarin":
      return "Ni Hao!";
    case "ingles":
      return "Hello!";
    default:
      return "Hola!";
  }
};
console.log(saludo("INGLES"));

const colors = (color) => {
  switch (color.toLowerCase()) {
    case "blue":
      return "This is blue";
    case "red":
      return "This is red";
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default:
      return "Color not found";
  }
};
console.log(colors("GREEN"));

const esDiezOCinco = (numero) => {
  return numero == 10 || numero == 5;
};
console.log(esDiezOCinco(5));

const estaEnRango = (numero) => {
  return numero < 50 && numero > 20;
};
console.log(estaEnRango(49));

const esEntero = (numero) => {
  return numero == Math.floor(numero);
};
console.log(esEntero(0.1));

const fizzBuzz = (numero) => {
  let resultado = "";
  numero % 3 === 0 ? (resultado += "fizz") : resultado;
  numero % 5 === 0 ? (resultado += "buzz") : resultado;
  return resultado || numero;
};
console.log(fizzBuzz(60));

const operadoresLogicos = (num1, num2, num3) => {
  return num1 < 0 || num2 < 0 || num3 < 0
    ? "Hay negativos"
    : num1 > num2 && num1 > num3 && num1 > 0
    ? "Número 1 es mayor y positivo"
    : num3 > num1 && num3 > num2
    ? (num3 += 1)
    : num1 === 0 || num2 === 0 || num3 === 0
    ? "Error"
    : false;
};
console.log(operadoresLogicos(7, 2, 1));

const esPrimo = (numero) => {
  if (numero == 0 || numero == 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      return false;
    }
  }
  return true;
};
console.log(esPrimo(11));

const esVerdadero = (valor) => {
  return valor ? "Soy verdadero" : "Soy falso";
};
console.log(esVerdadero());

function tablaDelSeis() {
  let tabla = [];
  for (let i = 0; i <= 10; i++) {
    tabla.push(6 * i);
  }
  return tabla;
}
console.log(tablaDelSeis());

const tieneTresDigitos = (numero) => {
  return numero >= 100 && numero < 1000;
};
console.log(tieneTresDigitos(399));

function doWhile(numero) {
  let i = 0;
  do {
    numero += 5;
    i++;
  } while (i < 8);
  return numero;
}
console.log(doWhile(123123));
