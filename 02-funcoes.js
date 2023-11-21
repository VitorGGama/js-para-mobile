// 02-funcoes.js

/* Formas tradicionais */


/*Sintaxe anônima associada á variável/constante 
Obs.: cuidado com a ordem, já que nesta sintaxe
a funçao Primeiro precisa ser declarada para 
somente depois ser chamada/executada. */
const exemplo1 = function(){
    console.log("Função anônima!");
};

exemplo1();

/* Sintaxe declarada/nomeada
Obs.: nesta sintaxe você pode chamar a função 
antes ou depois de declara-la. POrtanto, a ordem
não importa. */ 
function exemplo2(){
    console.log("Função Nomeada!");
}

exemplo2();

/* Exercicios
1) Crie uma função (qualquer sintaxe) que receba dois 
valores numéricos, calcule a diferença entre
eles e retorne o resultado.*/
//function calcularDiferenca(valor1, valor2) {
    //return valor1 - valor2;
//}
/*2) Chame esta função duas vezes passando valores
diferentes e guardando os resultados em varíaveis de escopo
global.*/

const calcularDiferenca = (valor1, valor2) => valor1 - valor2;
 
let resultado1 = calcularDiferenca(10, 5);
let resultado2 = calcularDiferenca(20, 10);

/*3) Mostre os valores processados pela função no terminal.*/
console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);


/* Sintaxe Arrow Function */
const exemplo3 = () => {
    console.log("Arrow Function!");
};

exemplo3();

// const saudacao = (cliente) =>{
//    console.log("Olá " + cliente);
// };

//Omitir os paratenses do parametro (Somente quando for 1)
// const saudacao = cliente => {
//    console.log("Olá "+ cliente);
// }

//Omitir as { } (Somente quando for uma única instrução)
const saudacao = cliente => console.log("olá "+cliente);
saudacao("Fulano");
saudacao("Beltrano");

const calculaMetade = (valor) => {
    return valor / 2;
};

let resultadoA = calculaMetade(100);
let resultadoB = calculaMetade(600);

console.log(resultadoA);
console.log(resultadoB);

console.log("-----------------");

/* exercicios 
1- Monte um arrow function que receba um nome de uma pessoa
e converta este nome para letras maiusculas.

2- Chame a função 3x (passando nomes diferentes) e exibindo
no console os resultados. */

const nomePessoa = (nome) => nome.toUpperCase();

let resultadoNome1 = nomePessoa("vitor");
let resultadoNome2 = nomePessoa("Aline");
let resultadoNome3 = nomePessoa("Jota");

console.log(resultadoNome1);
console.log(resultadoNome2);
console.log(resultadoNome3)






