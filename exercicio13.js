// criei o array de objetos
let carrinhos = {
    itens: [
            {
                nome:"ps5",
                quantidade: 5,
                precoUnitario:234  
            },
            {
                nome:"celta",
                quantidade: 2,
                precoUnitario:780  
            },
            {
                nome:"pc gamer",
                quantidade: 3,
                precoUnitario:527  
                
            }
        ]
    };
// variaveis iniciadas com valor 0
let valorTotalItens = 0;
let valorTotal = 0;

// o foreach esta iterando sobre o array carrinhos e esta calculando tudo
carrinhos.itens.forEach(item => {
    valorTotalItens = item.quantidade * item.precoUnitario;
    valorTotal += valorTotalItens;
    console.log(`O valor unitario de cara produto no carrinho é de: R$ ${valorTotalItens}`);
    
});

console.log(`O valor final do carrinho é de: R$ ${valorTotal}:`);