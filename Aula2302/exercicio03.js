class Bicicleta{
    #modelo;
    #cor;
    #marca;
    #velocidadeMaxima;

    setModelo(valor){
        this.#modelo = valor;
    }
    getModelo(){
        return this.#modelo;
    }

    setCor(valor){
        this.#cor = valor;
    }
    getCor(){
        return this.#cor;
    }

    setMarca(valor){
        this.#marca = valor;
    }
    getMarca(){
        return this.#marca;
    }

    setVelocidade(valor){
        if (valor > 35){
            console.log('Velocidade máxima atingida! Não é possível inserir acima de 35km/h.');
        } else{
            this.#velocidadeMaxima = valor;
        }
    }
    getVelocidade(){
        return this.#velocidadeMaxima;
    }
}

const caloi = new Bicicleta();
caloi.setMarca('Caloi');
console.log(caloi.getMarca());

caloi.setCor ('Azul Ardósia');
console.log(caloi.getCor());

caloi.setModelo ('Mountain Bike');
console.log(caloi.getModelo());

caloi.setVelocidade (36);
console.log(caloi.getVelocidade());