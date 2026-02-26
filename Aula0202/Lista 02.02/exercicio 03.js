const prompt = require('prompt-sync')();

var one = Number(prompt('Digite a nota da primeira etapa: '));
var two = Number(prompt('Digite a nota da segunda etapa: '));
var three = Number(prompt('Digite a nota da terceira etapa: '));

console.log('A média aritmética é: ' + ((one + two + three) / 3));