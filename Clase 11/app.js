window.addEventListener("load", () => cargarPeliculas());
// Variable para controlar la paginación.
let pagina = 1;
// Capturar los botones.
let btnAnterior = document.querySelector(".btnAnterior");
let btnSiguiente = document.querySelector(".btnSiguiente");
// Función de botón ANTERIOR.
btnAnterior.addEventListener("click", () => {
  if (pagina > 1) {
    pagina -= 1;
    cargarPeliculas();
  }
});
// Función de botón SIGUIENTE.
btnSiguiente.addEventListener("click", () => {
  if (pagina < 500) {
    pagina += 1;
    cargarPeliculas();
  }
});
// Función que carga y muestra las películas.
// https://api.themoviedb.org/3/movie/popular?api_key=41b39921d1310209f4d7666dbec80607&language=es-MX&page=1
const cargarPeliculas = async () => {
  try {
    let respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=41b39921d1310209f4d7666dbec80607&language=es-MX&page=${pagina}`
    );
    // console.log(respuesta);
    if (respuesta.status == 200) {
      let datos = await respuesta.json();
      console.log(datos.results);
      let peliculas = "";
      datos.results.forEach((pelicula) => {
        peliculas += `<div class="pelicula">   
        <img class="poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}">
        <h3 class="titulo">${pelicula.title}</h3>
        </div>`;
        document.querySelector(".contenedor").innerHTML = peliculas;
      });
    }
  } catch (error) {}
};
