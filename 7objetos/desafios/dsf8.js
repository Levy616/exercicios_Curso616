//                                                          DESAFIO 1 e 2
// class Pessoa {
//     cumprimentar() {
//         console.log("Seja bem vindo!!");
//     };

//     constructor (nome,idade,serie) {
//         this.nome = nome;
//         this.idade = idade;
//         this.serie = serie;
//     };

//     apresentar() {
//         console.log(`DADOS DO ALUNO -
// NOME: ${this.nome}
// IDADE: ${this.idade}
// SERIE: ${this.serie}`);
//     }
// }

// const aluno1 = new
// Pessoa ("Maycon", "16", "2Ano");
// const aluno2 = new
// Pessoa ("Andressa", "15", "1Ano");

// aluno1.cumprimentar();
// aluno1.apresentar();
// aluno2.cumprimentar();
// aluno2.apresentar();


//                                                            DESAFIO 3
// class Categoria {
//     constructor (nome) {
//         this.nome = nome;
//     }
// apresentar() {
//     console.log(`CATEGORIA: ${this.nome}`);
//     };
// }

// const categoria1 = new
// Categoria ("eletronicos");
// const categoria2 = new
// Categoria ("mobilia");
// const categoria3 = new
// Categoria ("roupas");

// categoria1.apresentar();
// categoria2.apresentar();
// categoria3.apresentar();
//                                                            DESAFIO 4
// class Produto {
//     constructor(preco, estoque) {
//         this.preco = preco;
//         this.estoque = estoque;
//     }

//     CalcularTotal() {
//         return this.preco * this.estoque;
//     }
// }
// const produto1 = new Produto(900, 10);
// const produto2 = new Produto(500, 20);

// produto1.CalcularTotal();
// produto2.CalcularTotal();

// console.log("Valor total: R$", produto1.CalcularTotal());
// console.log("Valor total: R$", produto2.CalcularTotal());

//                                                                      DESAFIO 5


// class Funcionarios {
//     constructor(nome, cargo, salario) {
//         this.nome = nome;
//         this.cargo = cargo;
//         this.salario = salario;
//     }

//     apresentar() {
//         console.log(`DADOS DO FUNCIONARIO
//         NOME: ${this.nome}
//         CARGO: ${this.cargo}
//         SALARIO: ${this.salario}`)
//     };
// }

// const funcionario1 = new Funcionarios("Pedro", "contador", 2000);
// const funcionario2 = new Funcionarios("Caio", "secretario", 1650);
// const funcionario3 = new Funcionarios("Gabriel", "faxineiro", 1625);

// funcionario1.apresentar();
// funcionario2.apresentar();
// funcionario3.apresentar();

//                                                    DESAFIO 6
// class Produto {
//     constructor(nome, preco) {
//         this.nome = nome;
//         this.preco = preco;
//     }

//     acressimo() {
//         return this.preco + 2.5
//     }
// };

// const produto1 = new Produto("BANANA", 6);
// const produto2 = new Produto("GOIABA", 2);
// const produto3 = new Produto("MAÇÃ", 1.50);

// console.log(produto1.nome, "VALOR NO ATACADO:R$", produto1.preco +
//     " VALOR NO VAREJO:R$", produto1.acressimo()
// );
// console.log(produto2.nome, "VALOR NO ATACADO:R$", produto2.preco +
//     " VALOR NO VAREJO:R$", produto2.acressimo()
// );
// console.log(produto3.nome, "VALOR NO ATACADO:R$", produto3.preco +
//     " VALOR NO VAREJO:R$", produto3.acressimo()
// );

//                                                 DESAFIO 7
// class Cliente {
//     constructor(nome) {
//         this.nome = nome;
//     }

//     apresentar() {
//         console.log(`NOME: ${this.nome}`);
//     }
// }

// const cliente1 = new Cliente("Paula");

// cliente1.apresentar();

//                                               DESAFIO 8
class Produto {
    constructor(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }
    validar() {
        if (this.quantidade < 0 ||  !Number.isInteger(this.quantidade)) {
                console.log(`NOME: ${this.nome} `)
                console.log("QUANTIDADE INVÁLIDA!!❌❌❌\n\n")

        } else {console.log (`DADOS DO PRODUTO
NOME: ${this.nome}
QUANTIDADE: ${this.quantidade}\n\n`)

        }
    }

};

const produto1 = new Produto ("mouse", 90);
const produto2 = new Produto ("teclado", 35);
const produto3 = new Produto ("monitor", -2.5);

produto1.validar();
produto2.validar();
produto3.validar();


//                                                        DESAFIO 9
// class Itens {
//     constructor(nome, preco, categoria) {
//         this.nome = nome;
//         this.preco = preco;
//         this.categoria = categoria;
//     }

//     jubileu() {
//         console.log(`=======DADOS DO PRODUTO======= \n
// NOME: ${this.nome}
// PREÇO: ${this.preco}
// CATEGORIA: ${this.categoria}\n\n`)
//     }
// };

// const item1 = new Itens("Carro", 500000, "Veiculo");
// const item2 = new Itens("Casa", 250000, "Imovel");
// const item3 = new Itens("maçã", 2, "Fruta");

// item1.jubileu();
// item2.jubileu();
// item3.jubileu();


//                                    DESAFIO 10
// class Produtos {
//     constructor(nome, preco, quantidade, codigo) {
//         this.nome = nome;
//         this.preco = preco;
//         this.quantidade = quantidade;
//         this.codigo = codigo;
//     }
//     validar() {
//         if (this.quantidade < 0 || !Number.isInteger(this.quantidade)) {
//             console.log(`NOME: ${this.nome} `)
//             console.log("QUANTIDADE INVÁLIDA!!❌❌❌\n\n")

//         } else {
//             console.log(`DADOS DO PRODUTO
// NOME: ${this.nome}
// QUANTIDADE: ${this.quantidade}\n\n`)
//         }
//     }

//     VTP() {
//         return this.preco * this.quantidade;

//     }
//     apresentar() {
//         console.log(`DADOS DO PRODUTO \n
//                 NOME: ${this.nome}
//                 PREÇO: ${this.preco}
//                 QUANTIDADE: ${this.quantidade}
//                 CODIGO: ${this.codigo}\n`);
//     }


// }

// const produtos = [
//     new Produtos("mouse", 20, 50, 101),
//     new Produtos("celular", 2000, 20, 102),
//     new Produtos("tv", 2500, 20, 103)
// ]

//                              DESAFIO 10
// class Produto {
//     constructor(codigo, nome, preco, quantidade) {
//         this.codigo = codigo;
//         this.nome = nome;
//         this.preco = preco;
//         this.quantidade = quantidade;
//     }

//     // Calcula o valor total do produto
//     calcularTotal() {
//         return this.preco * this.quantidade;
//     }

//     // Atualiza a quantidade com validação
//     atualizarQuantidade(valor) {
//         if (Number.isInteger(valor) && valor >= 0) {
//             this.quantidade = valor;
//             console.log(`Quantidade de ${this.nome} atualizada para ${valor}.`);
//         } else {
//             console.log(`Quantidade inválida para ${this.nome}!`);
//         }
//     }

//     // Apresenta as informações do produto
//     apresentar() {
//         console.log(`Código: ${this.codigo}`);
//         console.log(`Nome: ${this.nome}`);
//         console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
//         console.log(`Quantidade: ${this.quantidade}`);
//         console.log(`Total: R$ ${this.calcularTotal().toFixed(2)}`);
//         console.log("--------------------------");
//     }
// }

// // Array para armazenar os produtos
// const produtos = [];

// // Cadastro de três produtos
// produtos.push(new Produto(101, "Mouse", 50, 5));
// produtos.push(new Produto(102, "Teclado", 80, 2));
// produtos.push(new Produto(103, "Monitor", 700, 1));

// // Função para listar e calcular o estoque
// function listarEstoque() {
//     let totalGeral = 0;

//     console.log("\n=== CONTROLE DE ESTOQUE ===");

//     for (const produto of produtos) {
//         produto.apresentar();
//         totalGeral += produto.calcularTotal();
//     }

//     console.log(`VALOR GERAL: R$ ${totalGeral.toFixed(2)}`);
// }

// // Primeira listagem
// listarEstoque();

// // Teste de atualização válida
// console.log("\n=== ATUALIZAÇÃO VÁLIDA ===");
// produtos[0].atualizarQuantidade(10);

// // Testes de atualizações inválidas
// console.log("\n=== ATUALIZAÇÕES INVÁLIDAS ===");
// produtos[1].atualizarQuantidade(-5);
// produtos[2].atualizarQuantidade(2.5);

// // Listagem após os testes
// listarEstoque();