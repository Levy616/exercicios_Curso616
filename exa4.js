import {number,confirm,input,select} from '@inquirer/prompts';


// let preço = await number({message: 'qual o valor da compra?',
// required:true});


// const fodp = await select({
//     message:"qual a forma de pagamento?", 
//     choices: [
//     { name:' PIX (10% de desconto)', value: "P"},
//     { name: 'Cartão a vista (5% de desconto)', value:"Cv" },
//     { name: 'Cartão parcelado(Sem desconto)', value: "cp"}
// ]});

// switch (fodp) {
//     case "P" :
//         let pix_d = preço / 10;
//         let pcd = preço - pix_d;

//         console.log("Pix selecionado! Preço: " + pcd + "R$");
//         break;

//     case "Cv":
//         let cvd = preço / 10;
//         let cvd2 = cvd / 2 ;
//         let cvd3 = preço - cvd2;

//         console.log("Cartão a vista selecionado! Preço: " + cvd3 + "R$");
//         break;

//     case "cp":
//         const parcelas = await select ({
//             message:"Em quantas vezes?",
//             choices: [
//                 {name:'2X de '+ preço / 2 + "R$", value: "2deX"},
//                 {name:'3X de '+ preço / 3 + "R$", value: "3deX"},
//                 {name:'4X de '+ preço / 4 + "R$", value: "4deX"},
//                 {name:'5X de '+ preço / 5 + "R$", value: "5deX"},
//                 {name:'6X de '+ preço / 6 + "R$", value: "6deX"},
//                 {name:'7X de '+ preço / 7 + "R$", value: "7deX"},
//                 {name:'8X de '+ preço / 8 + "R$", value: "8deX"},
//                 {name:'9X de '+ preço / 9 + "R$", value: "9deX"},
//                 {name:'10X de '+ preço / 10 + "R$", value: "10deX"},
//                 {name:'11X de '+ preço / 11 + "R$", value: "11deX"},
//                 {name:'12X de '+ preço / 12 + "R$", value: "12deX"},
//             ]
//         })
// };



let calculadora = await number({message: 'primeiro numero.',
    required:true});

const sinal = await select({
        message: 'qual sinal deseja usar?',
        choices: [
            {name: '+',value: "+"},
            {name: '-',value: "-"},
            {name: '/',value: "/"},
            {name: '*',value: "*"}
         ]
});

let calculadora2 = await number({message: 'segundo numero.',
    required:true});

    switch (sinal) { 
        case"+":
            let RM = calculadora + calculadora2;
            console.log(RM);
            break;
            
        case"-":
            let RMe = calculadora - calculadora2;
            console.log(RMe);
            break;
        case"*" :
            let RMu = calculadora * calculadora2;
            console.log(RMu);
            break;
        case"/":
            let RD = calculadora / calculadora2;
            console.log(RD);
            break;
    };