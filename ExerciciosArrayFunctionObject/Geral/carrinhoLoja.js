const carrinho = [
    { nome: "Teclado", preco: 120, qtd: 1, categoria: "perifericos"},
    { nome: "Mouse", preco: 80, qtd: 2, categoria: "perifericos"},
    { nome: "Monitor", preco: 900, qtd: 2, categoria: "video"},
    { nome: "Cabo HDMI", preco: 30, qtd: 3, categoria: "acessorios"},
];

function analisarCarrinho(carrinho){
    let itensPerifericos = carrinho.filter((item) => item.categoria === "perifericos");
}