const corpo = document.querySelector('body');
corpo.style.backgroundColor = '#00ffee';
corpo.style.color = '#003cc9';


const titulo = document.querySelector('.titulo');
titulo.textContent = 'Colocando o Messi via JS';

const container = document.querySelector('#container');
container.style.width = '94%';
container.style.margin = '0 auto';
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.backgroundColor = '#e1c317';

let image = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjun2GjkW5pgkRWtKsbdNIQEbUZzjS0j1dQ&s">';
container.innerHTML += image;