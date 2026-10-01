import {number,confirm,input,select} from '@inquirer/prompts';


let preço = await number({message: 'qual o valor da compra?',
required:true});


const fodp = await select({
    message:"qual a forma de pagamento?", 
    choices: [
        { name:' PIX (10% de desconto)', value: "P"},
    { name: 'Cartão a vista (5% de desconto', value:"Cv" },
{ name: 'Cartão parcelado(Sem desconto', value: "cp"}
]});

switch (fodp) { case "P" :
let pix_d = preço / 10;
let pcd = preço - pix_d;

    console.log("Pix selecionado! Preço: " + pcd + "R$");
    break;
case "Cv":
    let cvd = preço / 10;
let cvd2 = cvd / 2 ;
let cvd3 = preço - cvd2;

console.log("Cartão a vista selecionado! Preço: " + cvd3 + "R$");
break;
case "cp":
    const parcelas = await select ({
        choices: [
            {name:'2X de 50,00R$', value: "2de50"},
            {name:'3X de 33,33R$', value: "3de33"},
        ]});
