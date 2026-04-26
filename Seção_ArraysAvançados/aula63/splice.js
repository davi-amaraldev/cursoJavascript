//               -5        -4        -3        -2         -1
//                0         1         2         3          4
const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];

// nomes.splice(índice, delete, element1, element2, element3, element4)
// pop

const removidos = nomes.splice(-1, 1);
console.log(nomes, removidos);