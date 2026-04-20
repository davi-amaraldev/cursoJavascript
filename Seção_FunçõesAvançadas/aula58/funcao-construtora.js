// Função construtora  -> objetos
// Função fábrica -> objetos
// Construtora  -> People (new)

function Pessoa(nome, sobrenome){
    // Atributos privados 
    const id = 123456;

    const metodoInterno = () => {

    };

    // This = Públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log('Eu sou um método.')
    };
}

const p1 = new Pessoa('Davi', 'Amaral');
const p2 = new Pessoa('Elisângela', 'Amaral');

console.log(p1);
console.log(p2);
p1.metodo();