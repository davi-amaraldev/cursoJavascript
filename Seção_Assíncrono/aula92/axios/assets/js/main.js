// fetch('pessoas.json')
//     .then(response => response.json())
//     .then(json => loadPageElements(json));

axios('./pessoas.json')
    .then(response => loadPageElements(response.data));
function loadPageElements(json){
    const table = document.createElement('table');
    for(let pessoa of json){
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = `Nome:  ${pessoa.nome}`;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = `Idade: ${pessoa.idade}`;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = `Salário: ${pessoa.salario}`;
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}
