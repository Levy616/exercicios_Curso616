// const aluno1 = new Aluno();

// aluno1.apresentar();
// aluno1.comprimentar();

// class Aluno {
//     constructor(nome,cargo) {
//         this.nome = nome;
//         this.cargo = cargo;
//     }

//     apresentar() { 
//         console.log(`Meu nome é ${this.nome} - 
//     ${this.cargo}`);
//     }
// }
// const aluno1 = new
// Aluno("Carlos",
//     "Diretor de turma");
// const aluno2 = new
// Aluno("ENEIAS", 
//     "Presidente do gremio estudantil");
// const aluno3 = new
// Aluno("Diogo Defante",
//     "diretor de projetos de turma");


// aluno1.apresentar();
// aluno2.apresentar();
// aluno3.apresentar();

// class Produto {
//     constructor(nome, preco) {
//         this.nome = nome;
//         this.preco = preco;
//     }

// calcularDesconto(percentual){ 
//         return this.preco * (1 - percentual / 100);
//         }

// apresentar() {
//     console.log(`Produto:
// ${this.nome}`);
//     console.log(`Preço: R$
// ${this.preco}`);

//     }
// };

// const produto = new 
// Produto("Monitor", 1000);
// const produto2 = new 
// Produto("teclado", 200);

// produto.apresentar();
// produto2.apresentar();

// console.log(
//       "Monitor com desconto:",

// produto.calcularDesconto(10)
// );
// console.log(
//       "teclado com desconto:",

// produto2.calcularDesconto(10)
// );

    

//DESAFIO 1
class Pessoa {
    cumprimentar() {
        console.log("Seja bem vindo!!");
    };

    constructor (nome,idade,serie) {
        this.nome = nome;
        this.idade = idade;
        this.serie = serie;
    };
    
    apresentar() {
        console.log(`DADOS DO ALUNO -
NOME: ${this.nome}
IDADE: ${this.idade}
SERIE: ${this.serie}`);
    }
}

const aluno1 = new
Pessoa ("Maycon", "16", "2Ano");
const aluno2 = new
Pessoa ("Andressa", "15", "1Ano");

aluno1.cumprimentar();
aluno1.apresentar();
aluno2.cumprimentar();
aluno2.apresentar();
