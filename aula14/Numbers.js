// IEEE 754-2008

let num1 = 0.7; // Number
let num2 = 0.1; // Number

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.7

console.log(num1);
console.log(Number.isInteger(num1));

/* 
? console.log(num1.toString() + num2);
? num1 = num1.toString();
? console.log(num1.toString(2)); Binario
? console.log(num1.toFixed(2)); Casas decimais
? console.log(Number.isInteger(num1));
? let temp = num1 * 'Ola'; | 
! Não faça cálculos com strings
? console.log(Number.isNaN(temp));
*/