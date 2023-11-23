//06-operador-rest.js

/* Conceito
Usando o ... como "rest operator"
podemos mesclar uma lista de parâmetro/argumentos
para uma função. */

const cientistas = [ "Tesla", "Einsten", "Newton", "Darwin"];
const artistas = [ "Jon", "Ozzy", "David", "Roger", "Floor", "Nein"];

const classificar = (...parametros) => {
    return parametros.sort();

};

//Chamada da função
console.log( classificar(...cientistas) ); //spread
console.log( classificar(...artistas) ); //spread
