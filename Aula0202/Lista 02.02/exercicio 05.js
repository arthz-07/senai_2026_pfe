const prompt = require('prompt-sync')();

var n1 = Number(prompt('Digite um número: '));
var n2 = Number(prompt('Digite um segundo número: '));

const maimen = (n1, n2) => {
    if (n1 > n2 === 0) {
        console.log('O primeiro número é maior que o segundo!');
    } else if (n1 === 0) {
        console.log('O primeiro número é igual a 0!')
    } else if (n2 === 0) {
        console.log('O segundo número é igual a 0!')
    } else {
        console.log('O segundo número é maior que o primeiro!');
    }
}

maimen(n1, n2);