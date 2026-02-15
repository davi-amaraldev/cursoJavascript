function calculadora(a, b, op){

    if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)){
        throw new TypeError('Operação Inválida: Não contem números.')
    }

    if (typeof op !== 'string'){
        throw new TypeError('Operação Inválida: Operador não existente.')
    }

    if (op !== '+' && op !== '-' && op !== '*' && op !== '/'){
        throw new Error('Operação Inválida: Operador não existente.')
    }

    if (op === '/' && b === 0){
        throw new Error('Divisão por zero.')
    }

    let resultado = 0; 

    switch (op){
        case '+':
            resultado = a + b;
        break
        case '-':
            resultado = a - b;
        break
        case '*':
            resultado = a * b;
        break
        case '/':
            resultado = a / b;
    }

    return resultado;
}

try {
    console.log(calculadora(1, 0, '/'));
} catch (err) {
    console.log(`Erro: ${err.message}`);
}