const produto = {
    nome: "Teclado",
    preco: 100,
    emEstoque: true
};

function verificarEstoque(produto){
    if(produto.emEstoque === true){
        return 'Produto disponível';
    }
    else{
        return 'Produto esgotado'
    }
}

console.log(verificarEstoque(produto));