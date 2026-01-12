// Usando filter
/*
*   function verificaIdade(usuarios){
*       let maioresIdade = usuarios.filter(usuario => usuario.idade >= 18)
*       return maioresIdade;
*   }
*
*   console.log(verificaIdade(usuarios))
*/

// Usando loop

const usuarios = [
    { nome: "Ana", idade: 20 },
    { nome: "Davi", idade: 18},
    { nome: "Carlos", idade: 17}
];

function verificaIdade(usuarios){
    let maiores = [];

    for (let i = 0; i < usuarios.length; i++){
        if(usuarios[i].idade >= 18){
            maiores.push(usuarios[i]);
        }
    }

    return maiores;
}

console.log(verificaIdade(usuarios));