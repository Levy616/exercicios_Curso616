class Livros {
    #nome
    constructor(nome, genero, quantidade) {
        this.#nome = nome;
        this.genero = genero;
        this.quantidade = quantidade;
    }
    get nome() {
        return this.#nome;
    }
    set 

    apresentar() {
        console.log (`==== DADOS`)
    }
}
