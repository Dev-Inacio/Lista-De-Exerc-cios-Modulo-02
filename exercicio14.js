// crio o objeto de arrays
let empresa = {
  departamentos: [
    {
      nome: "recursos humanos",
      funcionarios: [
        { nome: "thayna", cargo: "gerente de RH" },
        { nome: "inacio", cargo: "analista de RH" },
      ],
    },
    {
      nome: "tecnologia",
      funcionarios: [
        { nome: "jaques", cargo: "desenvolvedor" },
        { nome: "edu", cargo: "analista de sistemas" },
      ],
    },
    {
      nome: "financeiro",
      funcionarios: [
        { nome: "codifica", cargo: "contadoror" },
        { nome: "joelson", cargo: "analista financeiro" },
      ],
    },
  ],
};
// faço o for in pra iterar os nomes do departamentos
for (let i in empresa.departamentos) {
  let departamento = empresa.departamentos[i];
  console.log(`Departamento: ${departamento.nome}`);
  // faço o for of para iterar os nomes dos funcionarios
  for (let funcionario of departamento.funcionarios) {
    console.log(`Funcionario: ${funcionario.nome}`);
  }
}
