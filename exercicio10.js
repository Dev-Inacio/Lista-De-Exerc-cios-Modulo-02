// criei o array de objetos
let vendas = [
    {
        produto:"ps5",
        quantidade: 2,
        valor:1000    
    },
    {
        produto:"pc gamer",
        quantidade: 3,
        valor: 1000
    },
    {
        produto:"nitendo",
        quantidade:10,
        valor: 1000
    }
]

let totalVendas = 0;

// esta iterando sobre o array e esta fazendo a soma das vendas
vendas.forEach(venda => {
    totalVendas = venda.valor * venda.quantidade;
    console.log(`O ${venda.produto} foi vendido ${venda.quantidade} vezes e o TOTAL é: R$${totalVendas}`);
});
