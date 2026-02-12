let hoje = new Date();

console.log('Hoje é: ' + hoje);

let diaFinal = 31;
let mesFinal = 12;
 
console.log('Faltam ' + (mesFinal - (hoje.getMonth() + 1)) + ' meses e ' + (diaFinal - (hoje.getDay() + 1)) + ' dias para o fim do ano');