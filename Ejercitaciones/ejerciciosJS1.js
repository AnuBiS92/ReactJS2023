// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "String";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 35;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

const devolverString = (str) => {
  return str;
};
console.log(devolverString("Hola"));

const suma = (x, y) => {
  return x + y;
};
console.log(suma(5, 4));

const resta = (x, y) => {
  return y - x;
};
console.log(resta(8, 7));

const multiplica = (x, y) => {
  return x * y;
};
console.log(multiplica(9, 8));

const divide = (x, y) => {
  return x / y;
};
console.log(divide(45, 9));

const sonIguales = (x, y) => x == y;
console.log(sonIguales(7, 5));

const tienenMismaLongitud = (str1, str2) => str1.length == str2.length;
console.log(tienenMismaLongitud("Holis", "Chauchis"));

const menosQueNoventa = (num) => num < 90;
console.log(menosQueNoventa(89));

const mayorQueCincuenta = (num) => num > 50;
console.log(mayorQueCincuenta(47));

const obtenerResto = (x, y) => {
  return x % y;
};
console.log(obtenerResto(8, 5));

const esPar = (num) => num % 2 == 0;
console.log(esPar(5));

const esImpar = (num) => num % 2 == 1;
console.log(esImpar(1));

const elevarAlCuadrado = (num) => {
  return Math.pow(num, 2);
};
console.log(elevarAlCuadrado(8));

const elevarAlCubo = (num) => {
  return Math.pow(num, 3);
};
console.log(elevarAlCubo(3));

const elevar = (num, exponent) => {
  return Math.pow(num, exponent);
};
console.log(elevar(8, 3));

const redondearNumero = (num) => {
  return Math.round(num);
};
console.log(redondearNumero(8.4));

const redondearHaciaArriba = (num) => {
  return Math.ceil(num);
};
console.log(redondearHaciaArriba(7.1));

const numeroRandom = () => {
  return Math.round(Math.random() * 10);
};
console.log(numeroRandom());

const esPositivo = (numero) => {
  return numero > 0 ? "Es positivo" : numero < 0 ? "Es negativo" : false;
};
console.log(esPositivo(7));

const agregarSimboloExclamacion = (str) => {
  let resultado = str.concat("!");
  return resultado;
};
console.log(agregarSimboloExclamacion("Aguante Velez"));

const combinarNombres = (nombre, apellido) => {
  let nombreApellido = "";
  nombreApellido = nombreApellido.concat(nombre, " ", apellido);
  return nombreApellido;
};
console.log(combinarNombres("Emiliano", "Alvarez"));

const obtenerSaludo = (nombre) => {
  let string = "Hola " + nombre + "!";
  return string;
};
console.log(obtenerSaludo("Emiliano"));

const obtenerAreaRectangulo = (alto, ancho) => {
  return alto * ancho;
};
console.log(obtenerAreaRectangulo(8, 5));

const retornarPerimetro = (lado) => {
  return lado * 4;
};
console.log(retornarPerimetro(7));

const areaDelTriangulo = (base, altura) => {
  return (base * altura) / 2;
};
console.log(areaDelTriangulo(7, 8));

const deEuroAdolar = (euro) => {
  return euro * 1.2 + " dólares";
};
console.log(deEuroAdolar(8));

function esVocal(letra) {
  if (
    letra.length > 1 &&
    letra != "a" &&
    letra != "e" &&
    letra != "i" &&
    letra != "o" &&
    letra != "u"
  ) {
    return "Dato incorrecto";
  } else {
    return "Es vocal";
  }
}
console.log(esVocal(12));
