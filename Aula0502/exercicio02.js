const prompt = require('prompt-sync')();

let idade = Number(prompt("Digite sua idade: "));

const adquirir = (idade) => {
    if (idade > 18) {
        console.log('Você tem idade suficiente para adquirir um livro e é maior de idade!');
    } else if (idade >= 16) {
        console.log('Você tem idade suficiente para adquirir um livro, mas é menor de idade!');
    } else {
        console.log('Você não tem idade suficiente!');
    }
}

adquirir(idade);