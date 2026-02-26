class Caneta{
    //ATRIBUTOS PÚBLICOS
    cor = 'Roxo';
    marca = 'BIC';
    ponta = 'Grossa'
    quantidadeTinta = 5;
    tampa = true;

    //MÉTODO TEM PARÊNTESES
    escrever(){
        return 'Começou a escrever!';
    }
    sublinhar(valor){
        if (valor > this.quantidadeTinta){
            return 'Não há tinta suficiente para sublinhar essa quantidade.';
        }

        this.quantidadeTinta -= valor; //SUBTRAI O VALOR DA QUANTIDADE DE TINTA
        return 'Quantidade restante de tinta: ' + this.quantidadeTinta + '.';
    }
}

const canetaGrossa = new Caneta();
console.log (canetaGrossa.escrever());
console.log (canetaGrossa.sublinhar(10));