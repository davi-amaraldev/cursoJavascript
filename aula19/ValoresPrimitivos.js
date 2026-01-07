/*

Dados Primitivos (imutáveis) string, number, boolean, undefined
null (bigint, symbol)

Referência (mutável) - array, object, function

*/

const a = {
    nome: 'Davi',
    sobrenome: 'Amaral'
};

const b = {... a};

a.nome = 'João';

console.log(a);
console.log(b);