import {number,confirm,input,select} from '@inquirer/prompts';


let preço = await number({message: 'qual o valor da compra?',
required:true});


const fodp = await select({
    message:"qual a forma de pagamento?", 
    choices: [
    { name:' PIX (10% de desconto)', value: "P"},
    { name: 'Cartão a vista (5% de desconto)', value:"Cv" },
    { name: 'Cartão parcelado(Sem desconto)', value: "cp"}
]});

switch (fodp) {
    case "P" :
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
            message:"Em quantas vezes?",
            choices: [
                {name:'2X de '+ preço / 2 + "R$", value: "2deX"},
                {name:'3X de '+ preço / 3 + "R$", value: "3deX"},
                {name:'50X de '+ preço / 50 + "R$", value: "50deX"}
        
            ]
        })
};
