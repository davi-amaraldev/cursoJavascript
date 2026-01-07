function soma (x = 1, y = 1){
    const resultado = Number(x + y);
    return resultado;
} // Tipo de Função Normal

const subtracao = function (x = 1, y = 1){
    const resultado = Number(x - y);
    return resultado;
}; // Função em Variável

const multiplicacao = (x = 1, y = 1) => {
    const resultado = Number(x * y);
    return resultado;
} // Arrow Function Completa

const divisao = (x = 1, y = 1) => Number(x / y); // Arrow Function Simples