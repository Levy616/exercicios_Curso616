class Livros {
    #nome
    #genero
    constructor(nome, genero, quantidade) {
        this.#nome = nome;
        this.#genero = genero;
        this.quantidade = quantidade;
    }
    get nome() {
        return this.#nome;
    }
    set nome(valor) {
    this.#nome = valor;
}


    apresentar() {
        console.log (`==== DADOS ==== \n`);
        console.log (`NOME: ${this.#nome}`);
        console.log (`GENERO: ${this.#genero} `);
        console.log (`QUANTIDADE: ${this.quantidade}\n`);
    }
}
const livro1 = new Livros ("jantar secreto", "mistério",12);
const livro2 = new Livros ("looking for alaska", "romance",3);
const livro3 = new Livros ("it a coisa", "terror",1);

// livro1.quantidade = 11;
// livro2.#nome = "oba oba";
// livro3.genero = "medo" 

livro1.apresentar();  
livro2.apresentar();  
livro3.apresentar();  
