// Function Hoisting

function falaOi(){
    console.log('Oi');
}

// First-class objects (Objetos de Primeira Classe)
// Function expression

const souUmDado = function(){
    console.log('Sou um dado.');
};
souUmDado();

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:');
    funcao();
}

executaFuncao(souUmDado);

// Arrow function

const arrowFunction = () => {
    console.log('Sou uma arrow function.');
}
arrowFunction();

// Dentro de um objeto

const obj = {
    falar(){
        console.log('Estou falando...');
    }
};
obj.falar();