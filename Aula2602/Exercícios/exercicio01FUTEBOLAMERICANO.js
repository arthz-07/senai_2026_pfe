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

//CLASSE JOGADADOR DE FUTEBOL AMERICANO (FILHA)
class JogadorFutebolAmericano extends Jogador{
    #listaJogadas;
    #jardasConquistadas;

    constructor (listaJogadas, jardasConquistadas, nome, numero){
        super (nome, numero);
        this.#listaJogadas = listaJogadas;
        this.#jardasConquistadas = jardasConquistadas;
    }
    fazerTouchDown() {
        return 'O jogador ' + super.getNome() +
        ', de número ' + super.getNumero() + ' fez touchdown!' +
        ' No jogo ele deu o ' + this.#listaJogadas + ' que ocasionou o touchdown.' +
        ' Além disso, conquistou ' + this.#jardasConquistadas + ' jardas.';
    }
    bloquear() {
        return 'Bloqueio realizado!';
    }
    correrJardas(valor) {
        this.#jardasConquistadas += valor;
        return this.#jardasConquistadas;
    }
}

const jogadorEUA = new JogadorFutebolAmericano(['"Passe longo"'], 340, 'Amorim', 10);
console.log(jogadorEUA.fazerTouchDown());