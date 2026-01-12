let numeros = [1, 2, 3, 4];

function separarParesEImpares(numeros){

    const pares = [];
    const impares = [];

    for (let i = 0; i < numeros.length; i++){

        const n = numeros[i];
        if (n % 2 === 0){
            pares.push(n);
        }
        else{
            impares.push(n)
        }
    }

    const totalPares = pares.length;
    const totalImpares = impares.length
   
    return {
        pares,
        impares,
        totalPares,
        totalImpares
    }
}

console.log(separarParesEImpares(numeros));