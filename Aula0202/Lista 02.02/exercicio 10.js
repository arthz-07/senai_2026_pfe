const prompt = require('prompt-sync')();

let peso = Number(prompt("Digite seu peso em KG: "));
let altura = Number(prompt("Digite sua altura em M: "));
let imc = (peso / (altura ** 2));


const final = (imc) => {
    if (imc < 18.5) {
        console.log('Seu IMC está de acordo com uma pessoa ABAIXO DO PESO!');
    } else if (imc 	>= 18.5 && imc < 25) {
        console.log('Seu IMC está de acordo com uma pessoa no PESO NORMAL!');
    } else if (imc >= 25 && imc < 30){
        console.log('Seu IMC está de acordo com uma pessoa SOBREPESO!');
    } else {
        console.log('Seu IMC está de acordo com uma pessoa OBESA!!');
    }
}

final(imc);