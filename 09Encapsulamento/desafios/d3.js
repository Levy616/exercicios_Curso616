class Produto {
    #preco
    constructor(codigo, nome, preco) {
        this.codigo = codigo;
        this.nome = nome;
        this.#preco = preco;
    }
    get preco() {
        return this.#preco;
    }
    set preco(valor) {
        if (!Number.isFinite(valor) || valor < 0) {
            throw new Error("Preço inválido.");
        }
    }
}
