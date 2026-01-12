/* 
Davi Henrique Amaral tem 18 anos, pesa 60kg
tem 1.74 de altura e seu imc é de 19.82
Davi Henrique nasceu em 2008
*/

const nomeUsuario = "Davi Henrique ";
const sobrenomeUsuario = "Amaral";
const idade = 18;
const peso = 60;
const alturaEmM = 1.74;

let indiceMassaCorporal; // peso / altura²
let anoNascimento;

indiceMassaCorporal = peso / alturaEmM ** 2;
anoNascimento = 2026 - idade;

console.log(`${nomeUsuario} ${sobrenomeUsuario} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nomeUsuario} nasceu em ${anoNascimento}`);