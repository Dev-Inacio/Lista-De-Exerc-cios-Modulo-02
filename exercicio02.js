
// criei o objeto livro
let livro = {
    titulo:"A sociedade do Anel",
    autor:"J. R. R. Tolkien",
    anoPublicado:"29 de julho de 1954",
    genero:"Fantasia, Literatura fantástica",    
}

// verificando se existe a propriedade editora
if(livro.editora === undefined){
    livro.editora = "HarperCollins Brasil";         
} 

// percorrendo todos os valores do objeto e mostrando no console
for(let key in livro){
    console.log(`${key}: ${livro[key]}`); 
}


