//08.map.js
import cursos from "./modulos/cursos.js";

/* Map (mapear, mapeia - transformar em outra coisa)
Passa por elementos de um array e realiza operações em 
cada um deles através de uma função (callback), gerando um novo array.
*/

//Exemplo 1
const numeros = [10, 20, 5, 12, 66, 50 ];
console.log(numeros);

const numerosDobrados = numeros.map( numero => numero * 2);
console.log(numerosDobrados);

console.log(cursos);

//Exemplo 2: gerar um novo array apenas com os nomes dos cursos

// arrow function ->  const titulos = cursos.map(curso => curso.titulo);

const titulos = cursos.map( (curso)=>{
    return curso.titulo
} );

console.log(titulos);

console.log ("------------------------");

const precos = cursos.map ( curso => curso.preco - curso.preco * 0.10 );
console.log(precos);

console.log("----------------------")


//Desafio da minha maneira
const precoDesconto = cursos.map ( curso => {
    let id = curso.id
    let titulo = curso.titulo
    let categoria = curso.categoria;
    let preco = curso.preco - curso.preco * 0.10
    return {
        id:id, titulo:titulo, categoria:categoria, preco:preco
    }
}
    );    
console.log(precoDesconto);


console.log("-------------------")

/* DESAFIO! Versão do Professor
Gere um novo array de cursos contendo todos os dados anteriores e os preços novos com desconto. */
const cursosBlackFriday = cursos.map( curso => {
    return { ...curso, preco: curso.preco - curso.preco * 0.10 }
} );
console.log(cursosBlackFriday);

/* Simplificar a arrow function: é necessário
envolver o código de return implícito com parênteses. */
const cursosBlackFriday2 = cursos.map( curso => 
    ({ ...curso, preco: curso.preco - curso.preco * 0.10 })
);

console.log(cursosBlackFriday2);
