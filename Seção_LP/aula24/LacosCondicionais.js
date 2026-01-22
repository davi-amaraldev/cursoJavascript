// Entre 0 e 11 - Bom dia
// Entre 12 e 17 - Boa tarde
// Entre 18 e 23 - Boa noite

// If pode ser executado sozinho
// Else precisa de um if antes
// Eu posso ter infinitos else if no laço
// Só é possível ter um else

const hora = 22;

if (hora < 12) {
  console.log("Bom dia!");
} else if (hora >= 12 && hora < 18) {
  console.log("Boa tarde!");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite!");
} else {
  console.log("Olá, o horário está inválido.");
}
