const prompt = require('prompt-sync')();


let anoNascimento = new Date(prompt("Informe seu ano de nascimento: "));

let hoje = new Date();
console.log('Estamos no ano de: ' + hoje.getFullYear());

let idade = ((hoje.getFullYear() - 1) - anoNascimento.getFullYear());

console.log('Sua idade é: ' + idade);