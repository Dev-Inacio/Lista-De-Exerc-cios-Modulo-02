// criei o array
let funcionarios = [
    {
        nome:"inacio",
        cargo:"desenvolvedor",
        salario:1000
    },
    {
        nome:"thayna",
        cargo:"QA",
        salario:1200
    },
    {
        nome:"codifica",
        cargo:"desenvolvedor",
        salario:15000
    }
]
// percorre e verifica o array
for(let key of funcionarios){
    if(key.salario >= 1200){
        console.log(key)
    }
}

