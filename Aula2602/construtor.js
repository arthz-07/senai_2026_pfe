class Estudande{
    nome;
    #ra;
    #cpf;

    constructor (nome, ra, cpf){
        this.nome = nome;
        this.#ra = ra;
        this.#cpf = cpf;
    }
}

const Amorin = new Estudande('Arthur Amorim', 5896, 30434357601)
console.log(Amorim);
