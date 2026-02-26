const prompt = require('prompt-sync')();

var numero = Number(prompt("Digite um número com casas decimais (EX: 10.9088656787): "));

console.log('Seu número é: ' + numero);
 
console.log('O arredondamento de ' + (numero) + ' é: ' + (Math.random(numero)));