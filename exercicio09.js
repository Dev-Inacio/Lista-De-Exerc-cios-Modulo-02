// criei o array de objetos
let clientes = [
    {
        nome:"inacio",
        idade:54,
        cidade:"santa rita"      
    },
    {
        nome:"thayna",
        idade:22,
        cidade:"joao pessoa" 
    },
    {
        nome:"codifica",
        idade:39,
        cidade:"porto alegre" 
    }
]

// variavel contador
let contador = 0;


// esta verificando dentro do arrey objetos 
clientes.forEach(cliente => {
    if(cliente.idade > 30){
        contador++
    }
    
});

// esta me mostrando no console
console.log(`Existe apenas ${contador} com pessoas a idade acima de 30 anos`);