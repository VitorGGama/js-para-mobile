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
function calcularDiferenca(valor1, valor2) {
    return valor1 - valor2;
}
/*2) Chame esta função duas vezes passando valores
diferentes e guardando os resultados em varíaveis de escopo
global.*/
let resultado1 = calcularDiferenca(10, 5);
let resultado2 = calcularDiferenca(20, 10);

/*3) Mostre os valores processados pela função no terminal.*/
console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);