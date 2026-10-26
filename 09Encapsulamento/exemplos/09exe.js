class Produto {

    #preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.#preco = preco;
    }
    get nome() {
        return this.#nome;
    }
  
    }
    apredesentar() {
        console.log(`===== PRODUTO ==== \n
NOME: ${this.nome}
PREÇO: R$ ${this.#preco}`);
    }
}

const produto = new Produto("Mouse", 50);
const produto1 = new Produto("Teclado", 80);

// produto.preco = 100
// produto1.preco = 100

produto.apredesentar();
produto1.apredesentar(); 
