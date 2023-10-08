let num1 = 10;
let num2 = "10";
let resultado = num1 + num2;
console.log(resultado);
console.log("Hola");
if (num1 !== num2) {
  console.log("Es distinto");
} else {
  console.log("Es igual");
}
if (1 == 1) {
  console.log("Hola");
}
const esEntero = (numero) => (typeof numero == "int" ? true : false);
console.log(esEntero(5));

function resultadoBocaRacing() {
  let golesBoca = Math.round(Math.random() * 5);
  let golesRacing = Math.round(Math.random() * 5);
  return golesBoca > golesRacing
    ? `Gana Boca ${golesBoca} a ${golesRacing}`
    : golesRacing > golesBoca
    ? `Gana Racing ${golesRacing} a ${golesBoca}`
    : `Empatan ${golesBoca} a ${golesRacing}`;
}
console.log(resultadoBocaRacing());
