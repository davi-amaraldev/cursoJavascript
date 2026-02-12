let num = 6;

function verificarNumero(numero){
    numero = num;
    let resultado = '';
    let verificaNaN = '';

    if (numero % 3 === 0 && numero % 5 === 0){
        resultado = 'FizzBuzz';
    } else if (numero % 3 === 0){
        resultado = 'Fizz';
    } else if(numero % 5 === 0){
        resultado = 'Buzz';
    } else {
        resultado = num;
    }

    if (isNaN(num)){
        verificaNaN = true;;
    } else{
        verificaNaN = false;
    }

    return `${resultado} || É um NaN? ${verificaNaN}`
}

console.log(verificarNumero(num));