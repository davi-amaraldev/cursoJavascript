function leftZero(num){
    return num >= 10 ? num : `0${num}`
}

function dateLinter(data){
    const dia = leftZero(data.getDate());
    const mes = leftZero(data.getMonth() + 1);
    const ano = leftZero(data.getFullYear());
    const hora = leftZero(data.getHours());
    const min = leftZero(data.getMinutes());
    const seg = leftZero(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = dateLinter(data);

console.log(dataBrasil);