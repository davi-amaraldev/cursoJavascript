const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); 

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)

for (let p of ps){
    // background-color
    p.style.backgroundColor = backgroundColorBody;

    // color: (cor)
    p.style.color = "#FFFFFF"
}