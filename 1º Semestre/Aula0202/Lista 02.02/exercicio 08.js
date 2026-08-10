const prompt = require('prompt-sync')();

let nota = Number(prompt("Digite sua nota do ENEM do SESI (0 a 100): "));

const note = (nota) => {
    if (nota >= 90) {
        console.log('Sua nota se adequa a: A!');
    } else if (nota >= 80) {
        console.log('Sua nota se adequa a: B!');
    } else if (nota >= 70){
        console.log('Sua nota se adequa a: C!');
    } else if (nota >= 60){
        console.log('Sua nota se adequa a: D!');
    } else if (nota < 60){
        console.log('Sua nota se adequa a: E!');
    } else {
        console.log('Sua nota não tem adequação!');
    }
}

note(nota);