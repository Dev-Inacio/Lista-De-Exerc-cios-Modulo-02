// crio o array de objetos 

let produtos = [
    {
        nome:"pc gamer",
        preco:1000,
        desconto:0.10
    },
    {
        nome:"ps4",
        preco:1000,
        desconto:0.10
    },
    {
        nome:"xbox",
        preco:1000,
        desconto:0.10
    }
]

// ta percorrenddo o array e fazendo o calculo do desconto
produtos.forEach(produto => {
    produto.preco -= produto.preco * produto.desconto;
    console.log(`Nome: ${produto.nome}, Novo Preço: R$${produto.preco.toFixed(2)}`);
});
