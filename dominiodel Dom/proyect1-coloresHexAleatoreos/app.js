//seleccion de eleetos del Dom
const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorHezAleatoreo() {
  //retorna el color hexadecimal
  let digitos = '0123456789ABCDEF';
  let colorHex = '#';

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio];
  }
  return colorHex;
}

boton.addEventListener('click', function () {
  let colorAleatorio = generarColorHezAleatoreo();
  //actualizar el texto
  color.innerText = colorAleatorio;
  //actualizar el color de fondo
  document.body.style.backgroundColor = colorAleatorio;
});
