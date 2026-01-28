const pessoa = {
    nome: 'Davi',
    sobrenome: 'Amaral',
    idade: 18,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

const { nome, ... resto} = pessoa;

console.log(nome, resto)