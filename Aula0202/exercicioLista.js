// Exercício 01
/*
const prompt = require('prompt-sync')();

var nome = prompt('Digite seu nome: ');
console.log('Olá, ' + nome + '!' );
*/



// Exercício 02
/*
const prompt = require('prompt-sync')();

var a = Number(prompt('Digite um número: '));
var b = Number(prompt('Digite um segundo número: '));

console.log('A soma é: ' + (a + b));
*/



// Exercício 03
/*
const prompt = require('prompt-sync')();

var one = Number(prompt('Digite a nota da primeira etapa: '));
var two = Number(prompt('Digite a nota da segunda etapa: '));
var three = Number(prompt('Digite a nota da terceira etapa: '));

console.log('A média aritmética é: ' + ((one + two + three) / 3));
*/



// Exercício 04
/*
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
*/



// Exercício 05
/*
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
*/



// Exercício 06
const prompt = require('prompt-sync')();

var idade = Number(prompt('Digite sua idade: '));

const id = (idade) => {
    if (idade < 12) {
        console.log('Você é uma criança!');
    } else if (idade >= 12 && idade < 18) {
        console.log('Você é um adolescente!')
    } else if (idade >= 18 && idade < 60) {
        console.log('Você é um Adulto!')
    } else {
        console.log('Você é um idoso!');
    }
}

id(idade);



// Exercício 07



// Exercício 08



// Exercício 09


// Exercício 10


