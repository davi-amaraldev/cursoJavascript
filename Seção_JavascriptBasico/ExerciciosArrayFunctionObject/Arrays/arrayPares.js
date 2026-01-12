function filtrarPares(numeros){
    let pares = [];

    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0){
            pares.push(numeros[i]);
        }
        else{
            null;
        }
    }
    return pares;
}

let numeros = [ 1 , 2 , 3 , 4 , 5 , 6]

console.log(filtrarPares(numeros));