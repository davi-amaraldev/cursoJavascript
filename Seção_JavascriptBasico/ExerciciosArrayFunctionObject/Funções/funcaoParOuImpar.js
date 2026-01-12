const parOuImpar = (n = 0) => {
    
    let resultado = '';
    if (n % 2 === 0){
        resultado = 'Par';
    }
    else{
        resultado = 'Impar';
    }
    return resultado;
}

console.log(parOuImpar(4));
console.log(parOuImpar(7));