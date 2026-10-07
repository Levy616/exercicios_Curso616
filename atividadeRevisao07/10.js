
import inquirer from "inquirer"; 

let total = 0; // Total dos preços
let qtdBarato = 0; // Contador de baratos
let qtdMedio = 0; // Contador de médios
let qtdCaro = 0; // Contador de caros
const resposta = await inquirer.prompt([ // Pergunta a quantidade
{
type: "input",
name: "quantidade",
message: "Quantos produtos?"
}
]);
const quantidade = Number(resposta.quantidade); // Converte para número
for (let i = 1; i <= quantidade; i++) { // Repete o cadastro
const dados = await inquirer.prompt([
{
type: "input",
name: "nome",
message: `Nome do produto ${i}:`
},
{
type:"input",
name:"preco",
message:"Preço (R$):"
}
]);
const preco = Number(dados.preco); // Converte o preço
total += preco; // Soma ao total
if (preco <= 50) { // Até R$ 50
console.log("Categoria: Barato");
qtdBarato++;
} else if (preco <= 100) { // Até R$ 100
console.log("Categoria: Médio");
qtdMedio++;
} else { // Acima de R$ 100
console.log("Categoria: Caro");
qtdCaro++;
}
}
console.log("\n--- RESUMO ---");
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Baratos: ${qtdBarato}`);
console.log(`Médios: ${qtdMedio}`);