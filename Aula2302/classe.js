class Carro{
    //atributos
    modelo = 'Kia Sorento 4x4';
    marca = "KIA";
    ano = 2025;
    preco = 399990;

    //metódos
    mover(){
        console.log('Estou me movendo!');
    }
    mostrar(){
        console.log('O carro é: ' + this.modelo + ' ' + this.marca + this.ano + ' ' + this.preco);
    }
}

const sorento = new Carro(); //Instaciar a class = criar o objeto
sorento.mover(); //Uttilizar métodos
sorento.mostrar();