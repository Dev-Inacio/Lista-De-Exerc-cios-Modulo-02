
// criei o arrey de objetos
let alunos = [
    {
        nome: "inacio",
        nota1: 10, 
        nota2: 10
    },
    {
        nome: "bolsonaro",
        nota1: 10, 
        nota2: 10
    }, 
    {
        nome: "lula",
        nota1: 5, 
        nota2: 4
    }    
]


let media = 0;
// iterei sobre o arrey e fiz o calculo
for(let key of alunos){

    media = (key.nota1 + key.nota2 / 2)

    console.log(`O aluno ${key.nome} tem como media ${media}`); 
}