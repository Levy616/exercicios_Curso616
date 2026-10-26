class Produto {

    #preco;
    constructor(nome, preco) {
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

        this.#preco = valor;
    }

    moeda(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }

    apredesentar() {
        console.log(`Produto: ${this.nome}`);
        console.log(`preço: ${this.moeda(this.#preco)}`);

    }
}

const produto = new Produto("Mouse", 50);
const produto1 = new Produto("Teclado", 80);

produto.preco = 100
produto1.preco = 100

produto.apredesentar();
produto1.apredesentar(); 
