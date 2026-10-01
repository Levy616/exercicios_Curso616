import {number,confirm,input} from '@inquirer/prompts';
// const caucaia = await input({message: 'qual cidade voce mora?'});
// console.log(caucaia);
// if (caucaia = "caucaia") { 
//     console.log("fala tu caucaiense kkkkkkkkk");} else {
//     console.log("ihhhh olha o introsa")};


const idade = await number({message: 'digite sua idade'});
console.log(idade);
if (idade > 18) { 
    console.log("entrada liberada:bem vindo ao eveno");} else {
    console.log("entrada bloqueada:evento restrito para menores de 18 anos")}
    