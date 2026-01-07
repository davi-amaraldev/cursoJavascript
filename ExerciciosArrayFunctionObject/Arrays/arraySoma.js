function somarArray (numeros) {
    let soma = 0;

    for (i=0; i < numeros.length; i++){
        soma += numeros[i];
    }

    return soma;
}

const numeros = [ 1, 2 , 3 , 4 , 5 ];

console.log(somarArray(numeros));