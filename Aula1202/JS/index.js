<<<<<<< HEAD
const corpo = document.querySelector('body');
corpo.style.backgroundColor = '#002c7d';
corpo.style.color = '#ffdab7';


const titulo = document.querySelector('.titulo');
titulo.textContent = 'Adicionando elemento via JS';

const container = document.querySelector('#container');
container.style.width = '94%';
container.style.margin = '0 auto';
container.style.backgroundColor = '#00681e';

let anuncio = '<h2> Curso DEV com IA - Novidade!!! </h2>';
container.innerHTML += anuncio;

const imagem = document.querySelector('#imagem');

// Adicionando atributos
imagem.setAttribute('src', './img/A + G.jpg');
// imagem.setAttribute('src', './A + G.jpg'); // Remove atributos

// Adicionando classes
imagem.classList.add('imagem');

const botao = document.querySelector('.botao');
// Eventos
let contador = 0;
botao.addEventListener('click', () =>{
    alert('Cliquei no botão!' + contador++);
})

const botao2 = document.querySelector('.botao');
// Eventos
let contador2 = 0;
botao2.addEventListener('click', () =>{
    alert('Cliquei no botão!' + contador2++);
=======
const corpo = document.querySelector('body');
corpo.style.backgroundColor = '#002c7d';
corpo.style.color = '#ffdab7';


const titulo = document.querySelector('.titulo');
titulo.textContent = 'Adicionando elemento via JS';

const container = document.querySelector('#container');
container.style.width = '94%';
container.style.margin = '0 auto';
container.style.backgroundColor = '#00681e';

let anuncio = '<h2> Curso DEV com IA - Novidade!!! </h2>';
container.innerHTML += anuncio;

const imagem = document.querySelector('#imagem');

// Adicionando atributos
imagem.setAttribute('src', './img/A + G.jpg');
// imagem.setAttribute('src', './A + G.jpg'); // Remove atributos

// Adicionando classes
imagem.classList.add('imagem');

const botao = document.querySelector('.botao');
// Eventos
let contador = 0;
botao.addEventListener('click', () =>{
    alert('Cliquei no botão!' + contador++);
})

const botao2 = document.querySelector('.botao');
// Eventos
let contador2 = 0;
botao2.addEventListener('click', () =>{
    alert('Cliquei no botão!' + contador2++);
>>>>>>> d7140aa98c3f1830a2584abd0abba5950d2a84bc
})