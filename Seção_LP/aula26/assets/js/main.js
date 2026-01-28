const form = document.querySelector("#formulario");

form.addEventListener('submit', (e) => {
    e.preventDefault('submit')

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso){
        setResultado('Peso inválido', false); 
        return;
    }
    
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const classificacaoImc = getClassificacaoImc(imc)
    
    const msg = `Seu IMC é ${imc} (${classificacaoImc})`
    setResultado(msg, true)
});

/* 
Entre 2 e 18,5 - Abaixo do peso
Entre 18,5 e 24,9 - Normal
Entre 25 e 29,9 - Sobrepeso
Entre 30 e 34,9 - Obs G1
Entre 35 e 39,9 - Obs G2
Maior que 40 - Obs G3
tive que escrever pq se nao ia ficar dando alt tab o tempo todo...
*/
function getClassificacaoImc(imc){
    const classificacao = [
        'Abaixo do Peso',
        'Peso Normal',
        'Sobrepeso',
        'Obesidade Grau 1',
        'Obesidade Grau 2',
        'Obesidade Grau 3'
    ]

    if (imc >= 39.9) return classificacao[5];
    
    if (imc >= 34.9) return classificacao[4];
    
    if (imc >= 29.9) return classificacao[3];
     
    if (imc >= 24.9) return classificacao[2];
    
    if (imc >= 18.5) return classificacao[1];
    
    if (imc < 18.5){
        return classificacao[0];
    }
}

function getImc(peso, altura){
    const imc = peso / (Math.pow(altura, 2.0));
    return imc.toFixed(2);
}

function criaParagrafo(){
    const p = document.createElement('p')
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaParagrafo();

    if (isValid){ 
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}


