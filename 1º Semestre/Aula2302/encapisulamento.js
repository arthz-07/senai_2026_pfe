class Pessoa{
    nome; //atributo público 
    #cpf = '456.789.112/50'; //atributo privado

    //métodos getter e setter
    //métodos publicos de acesso aos atributos
    setCpf(valor){
        this.#cpf = valor;
    }
    getCpf(){
        return this.#cpf;
    }
}

const amorim = new Pessoa(); //instâcia do objeto Pessoa
amorim.nome = 'Amorim'; //acesso do atributo publico NOME
amorim.setCpf(22222222222); //acesso ao atributo privado CPF
console.log('O CPF é: ' + amorim.getCpf()); //acesso ao atributo privado CPF
console.log(amorim.nome); //acesso ao atributo público NOME
