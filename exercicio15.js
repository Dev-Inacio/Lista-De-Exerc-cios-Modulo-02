// criei o array de objetos
let transacoes = [
  { tipo: "entrada", valor: 1500.0 },
  { tipo: "saida", valor: 500.0 },
  { tipo: "entrada", valor: 1200.0 },
  { tipo: "saida", valor: 300.0 },
  { tipo: "entrada", valor: 750.0 },
];

let totalEntrada = 0;
let totalSaida = 0;

// forEach iterando os dados e fazendo os calculos
transacoes.forEach((transacao) => {
  if (transacao.tipo === "entrada") {
    totalEntrada += transacao.valor;
  } else if (transacao.tipo === "saida") {
    totalSaida += transacao.valor;
  }
});

let valorTotal = totalEntrada - totalSaida;

console.log(`Total Entrada: R$${totalEntrada.toFixed(2)}`);
console.log(`Total Saída: R$${totalSaida.toFixed(2)}`);
console.log(`Valor Total: R$${valorTotal.toFixed(2)}`);
