// 09-filter.js
/* Filter (Filtrar)
Passa por elementos de um array ( usando a função callback) e 
retornar valores de acordo com uma ou mais condições gerando
um novo array */

// Exemplo 1
const vendas = [1500, 3000, 1000, 500, 750, 200];
const meta = 1000;

console.log(vendas);
console.log("--------------------");


//Gerando um array com os valores que bateram a meta
const vendasAcimaDameta = vendas.filter( (venda) => {
    return venda >= meta
});
console.log(vendasAcimaDameta);

//Exemplo 2
const alunos = ["Nicolas", "Eliel", "André", "Kaue", "Barbosa", "Aline", "Melissa", "Marina", "monica", "Marcelo"
];
console.log(alunos);

const resultados = alunos.filter( aluno => {
    return aluno.startsWith("M") || aluno.endsWith("o")
});
console.log(resultados);

