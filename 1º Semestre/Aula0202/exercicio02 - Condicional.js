const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite um número: "));
let n2 = Number(prompt("Digite um segundo número: "));
let oper = prompt("Digite o caractere de uma das 4 operações (+ - * /): ");

const operacao = (n1, n2, oper) => {
    if (oper === '+') {
        console.log('A soma é: ' + (n1 + n2));
    } else if (oper === '-') {
        console.log('A subtração é: ' + (n1 - n2));
    } else if (oper === '*') {
        console.log('A multiplicação é: ' + (n1 * n2));
    } else {
        console.log('A divisão é: ' + (n1 / n2));
    }
}

operacao(n1, n2, oper);