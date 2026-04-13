function retornaFuncao(nome){
    return () => {
        return nome
    };
}

const funcao1 = retornaFuncao('Davi');
const funcao2 = retornaFuncao('Jonatas');

console.log(funcao1);
console.log(funcao2);