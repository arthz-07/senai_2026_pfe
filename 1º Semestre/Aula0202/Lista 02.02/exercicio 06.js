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