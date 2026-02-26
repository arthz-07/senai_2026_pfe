//CLASSE JOGADADOR (MÃE)
class Jogador {
    #nome;
    #numero;

    constructor (nome, numero){
        this.#nome = nome;
        this.#numero = numero;
    }
    treinar(){
        return '3x na semana!';
    }
    getNome(){
        return this.#nome;
    }
    getNumero(){
        return this.#numero;
    }
}

//CLASSE JOGADADOR DE BASQUETE (FILHA)
class JogadorBasquete extends Jogador {
    #alturaSalto;
    #totalCestas;

    constructor(nome, numero, alturaSalto, totalCestas) {
        super(nome, numero);
        this.#alturaSalto = alturaSalto;
        this.#totalCestas = totalCestas;
    }
    arremessar() {
        return 'O jogador ' + super.getNome() +
               ', de número ' + super.getNumero() +
               ', pulou a ' + this.#alturaSalto + ' metros' + ' para arremessar a bola!' +
               ' No fim do jogo, ele fez ' + this.#totalCestas + ' cestas!';
    }
    fazerEnterrada() {
        this.#totalCestas++;
        return 'Enterrada monstra!';
    }
}

const jogadorEU = new JogadorBasquete('Amorim', 23, 1.23, 15);
console.log(jogadorEU.arremessar());