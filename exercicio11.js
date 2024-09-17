// criei o array de objetos
let pedidos = [
    {
        cliente:"inacio",
        produto: "ferrari",
        quantidade:7  
    },
    {
        cliente:"thayna",
        produto: "cachorro-quente",
        quantidade:2 
    },
    {
        cliente:"codifica",
        produto: "opala",
        quantidade:3 
    }
]

let agrupamentoDeElementos = 0;

// esta iterando sobre o array e esta fazendo a soma das vendas
pedidos.forEach(pedido => {
    agrupamentoDeElementos = console.log(`O Cliente ${pedido.cliente} comprou ${pedido.quantidade} ${pedido.produto}:`);
});
