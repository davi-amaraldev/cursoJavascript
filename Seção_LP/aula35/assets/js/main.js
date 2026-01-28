const elementos = [
    {Tag: 'p', Texto: 'Frase 1'}, // 0
    {Tag: 'div', Texto: 'Frase 2'}, // 1
    {Tag: 'footer', Texto: 'Frase 3'}, // 2
    {Tag: 'section', Texto: 'Frase 4'}, // 3
];

const container = document.querySelector('.container');

const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    let { Tag , Texto } = elementos[i];
    let elemento = document.createElement(Tag);
    elemento.innerText = Texto;
    div.appendChild(elemento);
}

container.appendChild(div);
