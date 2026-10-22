//DESAFIO 1 e 2
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


//DESAFIO 3
class Categoria {
    constructor (nome) {
        this.nome = nome;
    }
apresentar() {
    console.log(`CATEGORIA: ${this.nome}`);
    };
}

const categoria1 = new
Categoria ("eletronicos");
const categoria2 = new
Categoria ("mobilia");
const categoria3 = new
Categoria ("roupas");

categoria1.apresentar();
categoria2.apresentar();
categoria3.apresentar();