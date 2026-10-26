class Alunos {

    #nota;
    constructor(nome, nota, serie) {
        this.nome = nome;
        this.#nota = nota;
        this.serie = serie;
    }


apresentar() {
    console.log(`==== INFORMAÇÕES DO ALUNO ==== \n`)
    console.log(`NOME: ${this.nome}`);
    console.log(`NOTA: ${this.#nota}`);
    console.log(`SERIE: ${this.serie}`);
    }
};

const aluno1 = new Alunos ("Alex",9.2,"Terceira serie");
const aluno2 = new Alunos ("Bruna",10.0,"Primeira serie");
const aluno3 = new Alunos ("Pumita Rodriges",0.5,"Segunda serie");

// aluno1.#nota = 123

aluno1.apresentar();
aluno2.apresentar();
aluno3.apresentar();
