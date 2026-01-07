const pessoa = {
    nome: 'Davi',
    idade: 18,
    profissao: 'Desenvolvedor'
};

function apresentar(pessoa){
    return `Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} e sou ${pessoa.profissao}`;
};

console.log(apresentar(pessoa));