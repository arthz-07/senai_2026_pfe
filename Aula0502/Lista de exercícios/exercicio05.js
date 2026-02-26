<<<<<<< HEAD
const prompt = require('prompt-sync')();


let anoNascimento = new Date(prompt("Informe seu ano de nascimento: "));

let hoje = new Date();
console.log('Estamos no ano de: ' + hoje.getFullYear());

let idade = ((hoje.getFullYear() - 1) - anoNascimento.getFullYear());

=======
const prompt = require('prompt-sync')();


let anoNascimento = new Date(prompt("Informe seu ano de nascimento: "));

let hoje = new Date();
console.log('Estamos no ano de: ' + hoje.getFullYear());

let idade = ((hoje.getFullYear() - 1) - anoNascimento.getFullYear());

>>>>>>> d7140aa98c3f1830a2584abd0abba5950d2a84bc
console.log('Sua idade é: ' + idade);