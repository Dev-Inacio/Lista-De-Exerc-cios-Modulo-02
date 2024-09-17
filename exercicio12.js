// criei o array de objetos
let estoque = [
    {
        produto:"inacio",
        quantidade: "ferrari",
        minimo:7  
    },
    {
        produto:"inacio",
        quantidade: "ferrari",
        minimo:7 
    },
    {
        produto:"inacio",
        quantidade: "ferrari",
        minimo:7 
        
    }
]

let agrupamentoDeElementos = 0;

// esta iterando sobre o array e esta fazendo a soma das vendas
pedidos.forEach(pedido => {
    agrupamentoDeElementos = console.log(`O Cliente ${pedido.cliente} comprou ${pedido.quantidade} ${pedido.produto}:`);
});
