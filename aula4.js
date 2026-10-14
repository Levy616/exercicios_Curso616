import {number,confirm,input,select} from '@inquirer/prompts';

const cidade = await select({
        message: 'qual cidade você mora?',
        choices: [
            {name: 'maraponga',value: "Ma"},
            {name: 'aldeota',value: "Al"},
            {name: 'caucaia',value: "Ca"},
            {name: 'ant.bezerra',value: "AB"}
         ]
    }
);

switch (cidade) {
    case"Ma":
    console.log ("ihhh oh o introsaaaaaaaa");
    break;

    case"Al":
    console.log ("ihhhhhhhhh oh o introsa e ainda tem moneys kaka");
    break;

    case"Ca":
    console.log ("FALAAAAAAAAAAAAA CAUCAIEnceeeeeEEEEEEeeeeeeEEEE");
    break;

    case"AB":
    console.log ("innnn troooo saaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    break;
}


// const idade = await number({message: 'digite sua idade'});
// console.log(idade);
// if (idade > 18) { 
//     console.log("entrada liberada:bem vindo ao eveno");} else {
//     console.log("entrada bloqueada:evento restrito para menores de 18 anos")}
    