//            0123456789...
const nomes = ['Davi', 'Joao', 'Pedro'];

//    for (let i = 0; i < nome.length; i++){
//       console.log(nome[1]);
//    }

//    for (let i in nome){
//       console.log(nome[i]);
//    }

for (let valor of nomes){
    console.log(valor);
}

nomes.forEach((el, i) => {
    console.log(el, i);
})