const produtos = [
    { codigo: 101, nome: "Mouse", preco: 50, quantidade: 10 },
    { codigo: 102, nome: "Teclado", preco: 80, quantidade: 5 },
    { codigo: 103, nome: "Monitor", preco: 700, quantidade: 3 }
];

let total = 0;

for (const produto of produtos) {
    const valor = produto.preco * produto.quantidade;

    total += valor;

    console.log(`${produto.nome}: R$ ${valor}`);
}

console.log(`Valor total: R$ ${total}`);