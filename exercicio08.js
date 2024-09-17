// criei o arrays de objetos
let filmes = [
    {
        nome:"senhor dos anéis",
        titulo:"sociedade do anel",
        diretor:"J. R. R. Tolkien",
        anoLancamento:"29 de julho de 1954"
    },
    {
        nome:"vingadores",
        titulo:"ulltimato",
        diretor:"Anthony Russo, Joe Russo",
        anoLancamento:"25 de abril de 2019"
    },
    {
        nome:"vingadores",
        titulo:"guerra infinita",
        diretor:"Anthony Russo, Joe Russo",
        anoLancamento:"26 de abril de 2018"
    }
]


let newFilmes = [{}];
// fiz o foreach e criei o novo array de filmes contendo apenas titulos
filmes.forEach(filme => {
    newFilmes = filme.titulo;
    console.log(newFilmes)
});
