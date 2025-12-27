// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços, traços ou pontos.
// Elas precisam ser inicializadas
/*  Ex:
const nome-Cliente = "Nome"; - Incorreto
const nome.cliente = "Nome"; - Incorreto
const nome cliente = "Nome"; - Incorreto
const nomeCliente = "Nome"; - Correto
Constantescom underline funcionam!!!
const nome_Cliente = "Nome";
*/
// Recomendo usar camelCase
/* 
Ex:
const nomeCompletoDoCliente = "Nome";
*/
// Essas constantes são case-sensitive, isso significa que letras maiúsculas e minúsculas são diferentes.
// Não podemos redeclarar constantes.
// Não pode modificar o valor de uma constante.


// String = Text | Number = Número
const terceiroNumero = '5';
const primeiroNumero = 5;
const segundoNumero = 10;
const conta = primeiroNumero * segundoNumero;
const resultadoDobro = conta * 2;
let resultadoTriplicado = conta * 3;
console.log(conta);
console.log(resultadoDobro);
console.log(resultadoTriplicado);

resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultadoTriplicado);
console.log(typeof primeiroNumero);
console.log(typeof terceiroNumero);

