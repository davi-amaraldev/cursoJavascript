// Break encerra a iteração completa.
// Continue pula a condição, e continua a iteração.

let nomes = ['Davi', 'Henrique', 'Joao'];

for (let nome of nomes){
    if(nome == 'Henrique'){
        console.log('Nome correto');
        continue;
    }

    console.log(nomes[nome]);
}