const prompt = require('prompt-sync')();
var nota = Number(prompt("Digite sua nota: "));
let div = nota / 2;
let pontuacaoFinal = div ** 2;
console.log('Sua média é: ' + pontuacaoFinal);