const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

//Actualizar texto de los parrafos

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

//funcion actuliza color

function actualizarColor(r, g, b) {
  const colorRGB = `rgb(${r},${g},${b})`;
  document.body.style.backgroundColor = colorRGB;
}

//actualizar para red

inputRojo.addEventListener('change', (e) => {
  let rojo = e.target.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});
inputVerde.addEventListener('change', (e) => {
  let verde = e.target.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});
inputAzul.addEventListener('change', (e) => {
  let azul = e.target.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});
