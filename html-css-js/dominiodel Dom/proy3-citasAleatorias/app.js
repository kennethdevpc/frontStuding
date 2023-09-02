let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function generarEnteroAleatorio(min, max) {
  //esto no incluye el maximo en los valores posibles
  return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
  console.log('dioooooo');
  let inidiceAleatorio = generarEnteroAleatorio(0, citas.length); //genero numero aleatroio entre 0 y el maximo longitud el arreglo de citas
  citaElem.innerText = `"${citas[inidiceAleatorio].texto}"`;
  autorElem.innerText = `"${citas[inidiceAleatorio].autor}"`;
}
cambiarCita();

botonElem.addEventListener('click', cambiarCita);
