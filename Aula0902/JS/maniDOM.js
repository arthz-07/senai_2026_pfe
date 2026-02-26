// alert('Eu estou aprendendo o DOM e sou um bom aluno!')
// alert('Eu estou aprendendo o DOM e meu professor é top!')

let fundo = document.getElementById('corpo');


let fundoPagina = document.querySelector('#corpo'); //Seletor ID
// document.querySelector('.corpo') //Seletor CLASS

fundo.style.backgroundColor = 'rgb(99, 25, 190)';

const titulo = document.querySelector('.titulo');
titulo.style.color = 'rgb(233, 221, 248)';
titulo.style.fontSize = '50px';
titulo.textContent += '- SESI Miradópolis';