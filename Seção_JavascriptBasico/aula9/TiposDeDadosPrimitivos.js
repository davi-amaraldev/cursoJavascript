// String, number, undefined, null, boolean

const nome = 'Davi'; // string
const nome1 = "Davi"; // string
const nome2 = `Davi`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const meuPaiEhCareca = true;
const alunoAprovado = true; // o tipo booleano pode ser true ou false

console.log(typeof nome);
console.log(typeof num1);
console.log(typeof nomeAluno);
console.log(typeof sobrenomeAluno);
console.log(typeof meuPaiEhCareca);

let a = 2;
const b = a;
console.log(a, b) // 2, 2

a = 3;
console.log(a, b); // 3, 2