console.log('Está rodando!')

function meuEscopo(){

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const nome = form.querySelector('.nome');
    const idade = form.querySelector('.idade');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    form.addEventListener('submit', function (evento){
        evento.preventDefault();

        const pessoa = {
            nome: nome.value,
            idade: idade.value,
            peso: peso.value,
            altura: altura.value
        }

        const IMC = (peso, altura) => {
            peso = Number(peso);
            altura = Number(altura);
            return peso / (Math.pow(altura, 2));
        };

        function calcularIMC(pessoa) {
            return IMC(pessoa.peso, pessoa.altura);
        }


        let resultadoIMC = calcularIMC(pessoa);

        function exibirIMC() {
        resultado.innerHTML = 
            `Seu nome é ${pessoa.nome}, você tem ${pessoa.idade} anos, e seu IMC é ${resultadoIMC.toFixed(2)}`;
        }
        exibirIMC();
    });
}

meuEscopo();