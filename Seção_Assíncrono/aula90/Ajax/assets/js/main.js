const req = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(obj.method, obj.url, true);

        xhr.addEventListener('load', () => {
            const response = {
                code: xhr.status,
                msg: xhr.statusText,
                content: xhr.responseText,
            };

            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(response);
            } else {
                reject(response);
            }
        });

        xhr.addEventListener('error', () => {
            reject({
                code: xhr.status,
                msg: 'Erro de rede',
                content: null,
            });
        });

        xhr.send();
    });
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        loadPage(el);
    }
});

async function loadPage(el) {
    try {
        const href = el.getAttribute('href');

        const objConfig = {
            method: 'GET',
            url: href,
        };

        const response = await req(objConfig);
        loadResult(response.content);
        console.log(response.code + ' ' + response.msg);
    } catch (e) {
        console.log(e)
        console.log(response.code)
        console.log(responde.msg)
    }
}

function loadResult(content) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = content;
}