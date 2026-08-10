const prompt = require('prompt-sync')();

var numero = Number(prompt('Digite um número: '));

const parimpar = (numero) => {
    if (numero % 2 === 0) {
        console.log('O número ' + (numero) + ' é: par');
    } else {
        console.log('O número ' + (numero) + ' é: ímpar');
    }
}

parimpar(numero);