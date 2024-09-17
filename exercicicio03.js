// crio o objeto
let produto = {
    caneta: 10,
    caderno: 80,
    borracha: 10,
    pincel: 27,
    estilete: 10,
    tinta: 40
}

// função para filtrar as condições
 function filtrandoPropriedades(){
    // novo objeto onde vai ficar os produtos filtrados
    let newObj = {};

    // loop para verificar o objeto
    for(let key in produto){

        // condiçao para filtrar 
        if(produto[key] === 10){
            // novo objeto
            newObj[key] = produto[key]; 
        }
    }      
    return newObj; 
}

// mostrando no console 
console.log(filtrandoPropriedades())