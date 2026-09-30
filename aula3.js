import { input,number } from '@inquirer/prompts';
const nome = await input({message: 'Qual seu nome?' });
const resposta = await input({message: 'oque voce deseja?'});

let idade = await number ({message: 'Idade?', 
    min:0,
    max:120,
    required: true});
let idade_dps = idade + 1;

console.log("Prazer revê-lo Rei," + nome + "✠✠✠✠" );
console.log("Você deseja " + resposta); 
console.log("Ano que vem você terá " + idade_dps + " anos.");
