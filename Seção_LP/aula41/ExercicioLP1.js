const numero1 = Math.random() * 10;
const numero2 = Math.random() * 10;

function getMaior(num1, num2){
    num1 = numero1;
    num2 = numero2;
    let resultado, menor;

    if (num1 > num2){
        resultado = num1;
        menor = num2;
    } else if (num2 > num1){
        resultado = num2;
        menor = num1;
    } else{
        resultado = 'Número Igual ou Inválido'
    }

    return `O número ${resultado} é maior que ${menor}`
}

const maiorOuMenor = getMaior(numero1, numero2);

console.log(maiorOuMenor);