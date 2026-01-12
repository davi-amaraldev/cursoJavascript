const notas = [7, 4, 9, 6, 10, 3];

function analisarNotas(notas){

    let aprovados = [];
    let reprovados = [];
    let soma = 0;
    let maiorNota = notas[0];
    let menorNota = notas[0];

    for(let i = 0; i < notas.length; i++){
        let n = notas[i];

        if (n >= 7.0){
            aprovados.push(n)
        }
        else{
            reprovados.push(n)
        }

        soma += n;

        if (n > maiorNota){
            maiorNota = n;
        }

        if (n < menorNota){
            menorNota = n;
        }
    }

    let media = soma / notas.length;
    media = Number(media);

    return {
        aprovados,
        reprovados,
        media,
        maiorNota,
        menorNota
    }
}

console.log(analisarNotas(notas));