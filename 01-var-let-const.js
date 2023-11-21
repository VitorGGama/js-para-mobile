//01-var-let-const.js

var idade = 18; //Escopo global
if( idade >= 18){
    let mensagem = "É adulto!"; //Global
}else {
    let mensagem = "É menor!"; //Global
    }

    console.log(idade);

    /*Dará erro pois a mensagem só existe dentro 
    do bloco if/else */
   // console.log(mensagem);

let meuNome = "Vitor";
console.log(meuNome);

//Reatribuição Não é possivel em constantes
//meuNome = "Vitor Gama";
console.log(meuNome);

//Cosntantes sempre são declaradas com algum valor
//E este valor Não pode ser modificado
const escola = "Senac";