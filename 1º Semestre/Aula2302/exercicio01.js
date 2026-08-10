class Livro{
    //atributos
    nome = 'O Pequeno Príncipe';
    grupoEditora = 'HarperCollins Brasil';
    autor = "Antoine de Saint-Exupéry";
    genero = 'Fábula filosófica, Literatura Infantil/Juvenil';
    dataLancamento = 1943;
    paginas = 100;
    preco = 100;
    tema = 'condição humana, amizade, amor, perda e a busca pelo verdadeiro sentido da vida';

    //metódos
    ler(){
        console.log('Estou lendo!');
    }
    mostrar(){
        console.log('O livro é: ' + this.nome + ', do grupo: ' + this.grupoEditora
        + ', lançado no ano de ' + this.dataLancamento + ', escrito por ' + this.autor
        + ', do gênero: ' + this.genero + '. O livro tem ' + this.paginas + ' páginas.'
        + ' Se encontra num valor de R$' + this.preco + '. Por fim, o livro fala sobre a ' + this.tema + '.')
    }
}

const pequenoprince = new Livro(); //Instaciar a class = criar o objeto
pequenoprince.ler(); //Uttilizar métodos
pequenoprince.mostrar();