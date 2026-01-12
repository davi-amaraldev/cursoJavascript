const numero = Number(prompt('Digite um número: '));

const raizQuadrada = document.getElementById('squareRoot');
raizQuadrada.innerHTML = Math.sqrt(numero, 2);

const verificaInteiro = document.getElementById('verificaInteiro');
verificaInteiro.innerHTML = Number.isInteger(numero);

const verificaNaN = document.getElementById('verificaNaN');
verificaNaN.innerHTML = isNaN(numero);

const arredondaBaixo = document.getElementById('arredondaBaixo');
arredondaBaixo.innerHTML = Math.floor(numero);

const arredondaCima = document.getElementById('arredondaCima');
arredondaCima.innerHTML = Math.ceil(numero);

const casasDecimais = document.getElementById('duasCasas');
casasDecimais.innerHTML = numero.toFixed(2);