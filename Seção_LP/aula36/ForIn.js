// For in -> lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Davi',
    sobrenome: 'Amaral',
    idade: 18
}

for (let key in pessoa){
    console.log(key, pessoa[key]);
}