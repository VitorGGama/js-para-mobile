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