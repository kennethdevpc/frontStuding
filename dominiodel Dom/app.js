contenedor = document.getElementById('titulo');
const topping = document.getElementsByClassName('f-marron');
const misToppings = document.getElementsByTagName('li');

const cebolla = document.querySelector('.top.f-naranja');
const aceitunas = document.querySelector('ul li.f-marron');
const primerNoFondoMarron = document.querySelector('ul li:not(.f-marron)');

const toppingsNaranjas = document.querySelectorAll('ul li:not(#aceitunas)');

//_______personalizando Stylos:
const primerTop = document.querySelector('.top');
primerTop.style.backgroundColor = 'blue';
primerTop.style.textTransform = 'uppercase';

console.dir(primerTop);
