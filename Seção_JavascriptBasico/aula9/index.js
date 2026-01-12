// Em Javascript é possível  redeclarar uma variável com VAR
// O let não pode se fazer isso, desde o ES6 (ECMAScript 2025)
/* Se nós declararmos uma variável sem
const, let ou var
Ela vai se tornar uma variável global.
Ex:
nome = 'Davi';
*/

var nome = 'Davi';
var nome = 'Amaral';

console.log(nome)