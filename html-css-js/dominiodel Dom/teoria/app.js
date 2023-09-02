contenedor = document.getElementById('titulo');
const topping = document.getElementsByClassName('f-marron');
const misToppings = document.getElementsByTagName('li');

const cebolla = document.querySelector('.top.f-naranja');
const aceitunas = document.querySelector('ul li.f-marron');
const primerNoFondoMarron = document.querySelector('ul li:not(.f-marron)');

const toppingsNaranjas = document.querySelectorAll('ul li:not(#aceitunas)');

//_______personalizando Stylos:
const primerTop = document.querySelector('.top');
primerTop.style.backgroundColor = 'gray';
primerTop.style.textTransform = 'uppercase';

//-__________acceder a texto
const listas = document.getElementById('lista-toppings');
let textoList = listas.innerText;
//Cambiar el texto
const titulo = document.getElementById('titulo');
titulo.innerText = 'cambiando titulo';

//__________Atributos
const enlaces = document.querySelector('a');
enlaces.removeAttribute('href');
enlaces.setAttribute('href', 'holamunro');

//__________Listas de clases
const primerTop2 = document.querySelector('.top');
primerTop2.classList.add('texto-verde');
primerTop2.classList.contains('f-marron');
primerTop2.classList.remove('top');
primerTop2.remove();

//__________AGREGANDO ELEMENTOS EN EL DOM
const listaTops = document.getElementById('lista-toppings'); //referencia punto donde se posisionara el nuevo elemento html
const topNuevo = document.createElement('h1'); //elemento nuevo que se queire agregar
topNuevo.classList.add('top', 'f-marron'); //puedo agregar clases
topNuevo.innerText = 'queso extrax';
listaTops.append(topNuevo);
listaTops.append('tambien se puede agregar elementos texto y no html');

//____________recorrido en el dom es decir elementos hijo y padres
const listaDeToppings = document.getElementById('lista-toppings');
let elemetosPadre = listaDeToppings.parentElement.parentElement;
//elemetosPadre.classList.add('peubacolor');
let elementosHijo = listaDeToppings.children;
let elementosHijoprimero = listaDeToppings.firstElementChild;
let elementosHijoultimo = listaDeToppings.lastElementChild;
let elementosAnteriorHermano = listaDeToppings.previousElementSibling;
let elementosSiguienteHermano = listaDeToppings.nextElementSibling;

//____________Eventos
//forma 1
function mostrarClick(param) {
  console.log(param);
}

//forma con addEventlistener
function mostrarClickEventListner(e) {
  console.log(e.target.innerText);
}
const cebollaB = document.querySelector('.f-naranja');
cebolla.addEventListener('click', mostrarClickEventListner);
//asignando esa funciona a todos los topics:
const topics = document.getElementsByClassName('top');
for (const topic of topics) {
  topic.addEventListener('click', mostrarClickEventListner);
}

console.log(topics);
