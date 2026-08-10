const prompt = require('prompt-sync')();

let produto = Number(prompt("Digite o valor do produto: "));
console.log('---CUPONS EXISTENTES---');
console.log('1 - OURO (15%)');
console.log('2 - PRATA (10%)');
console.log('3 - BRONZE (5%)');
let cupom = prompt('*Escolha algum dos cupons*: ');


const desconto = (produto) => {
    if (cupom === 1) {
        console.log('O valor do produto com desconto é: ' + (produto - (produto * 0.05)) + ', isso entra no cupom OURO');
    } else if (cupom === 2) {
        console.log('O valor do produto com desconto é: ' + (produto - (produto * 0.10)) + ', isso entra no cupom PRATA');
    } else if (cupom === 3){
        console.log('O valor do produto com desconto é: ' + (produto - (produto * 0.15)) + ', isso entra no cupom BRONZE');
    } else {
        console.log('Cupom inválido!');
    }
}

desconto(produto);