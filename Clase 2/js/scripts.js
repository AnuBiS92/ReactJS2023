let sonidoBatman = document.querySelector(".bati-encendido");
let sonidoBoton = document.querySelector(".bati-click");
let batman = document.querySelector(".batman");
let batmanBoton = document.querySelector(".bati-boton");
let estadoLinterna = "apagado";
batmanBoton.addEventListener("click", controlarLinterna);

// Funciones.

function controlarLinterna() {
  if (estadoLinterna == "apagado") {
    // La cambia a "encendido".
    estadoLinterna = "encendido";
    sonidoLinterna();
    // Efecto de sonido.
    batman.classList.add("batman-activo");
  } else {
    // La cambia a "apagado".
    estadoLinterna = "apagado";
    sonidoLinterna();
    batman.classList.remove("batman-activo");
  }
}

function sonidoLinterna() {
  if (sonidoBatman.paused) {
    sonidoBoton.play();
    sonidoBatman.play();
  } else {
    sonidoBoton.play();
    sonidoBatman.pause();
  }
}
