//07-desestruturacao.js

/* Destructuring ou Desestruturação
Extrair os dados de arrays e objetos para varíaveis/constantes
individuais*/

//Destruturing em arrays
const alunas = ["Tanaka", "Zimbo", "melissa"];
const [tanaka, zimbo, melissa] = alunas;


console.log(tanaka);
console.log(zimbo);
console.log(melissa);

const unidades = ["Penha", "Tatuapé", "Itaquera", "São Miguel"];
const [penha, tatuape, , saomiguel] = unidades;

console.log("-------------------");
console.log(penha);
console.log(tatuape);
console.log(saomiguel);

console.log("-------------------");

const [tesla, einsten, newton] = ["Tesla", "Einsten", "Newton"];

console.log(tesla);
console.log(einsten);
console.log(newton);

console.log("-------------------");

const recursos = [
    ["notebook", "TV Led", "Computador desktop"],
    texto => texto.toUpperCase()
];
console.log(recursos); //Arrays completo

//destructuring
const [produtos, converter] = recursos;

//Acessando através da constante que foi gerada pelo destructuring
console.log(produtos[1]); //TV led

for (const produto of produtos) {
    console.log("Produto: " + produto);
};



console.log(converter("tiago"));
console.log(converter("geladeira"));
console.log(converter(produtos[1]));
