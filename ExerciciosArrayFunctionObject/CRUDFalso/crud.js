const db = {
    usuarios: [
        { id: 1, nome: "Ana", idade: 20},
        { id: 2, nome: "Davi", idade: 19}
    ]
}

function criarUsuario(nome, idade){
    const ultimoUsuario = db.usuarios[db.usuarios.length - 1];
    const novoId = ultimoUsuario.id + 1;

    const novoUsuario = {
        id: novoId,
        nome: nome,
        idade: idade
    };

    db.usuarios.push(novoUsuario);

    return novoUsuario;
}

function listaUsuarios(){
    return db.usuarios;
}

function buscaUsuariosId(id){
    const usuario = db.usuarios.find(u => u.id === id);
    return usuario || null;
}

function updateUsuario(id, dados){
    const usuario = buscaUsuariosId(id);
    if(!usuario){
        return null;
    }

    if (dados.nome !== undefined){
        usuario.nome = dados.nome;
    }

    if (dados.idade !== undefined){
        usuario.idade = dados.idade;
    }

    return usuario;
}

function deletarUsuario(id){
    const tamanhoAntes = db.usuarios.length;

    db.usuarios = db.usuarios.filter(usuario => usuario.id !== id);

    return db.usuarios.length < tamanhoAntes;
}

console.log(deletarUsuario(1));
console.log(db.usuarios);
