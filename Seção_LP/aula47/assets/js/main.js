function getHourOfSeconds(segundos){
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

console.log(getHourOfSeconds(10))

const clock = document.querySelector('.relogio');
const init = document.querySelector('.iniciar');
const pause = document.querySelector('.pausar');
const zero = document.querySelector('.zerar');

let seconds = 0;    
let timer = null;

function clockInit(){

    if (timer !== null) return; 

    timer = setInterval(() => {
        seconds++;
        clock.innerHTML = getHourOfSeconds(seconds);
    }, 1000)

}

function setRunningStyle(){
    clock.classList.remove('pausado', 'idle');
    clock.classList.add('rodando');
}

function setPausedStyle(){
    clock.classList.remove('rodando', 'idle');
    clock.classList.add('pausado');
}

function setIdleStyle(){
    clock.classList.remove('rodando', 'pausado');
    clock.classList.add('idle');
}

init.addEventListener('click', (event) => {
    clockInit();
    setRunningStyle();
})

pause.addEventListener('click', (event) => {
   clearInterval(timer);
   timer = null;
   setPausedStyle();
})

zero.addEventListener('click', (event) => {
   clearInterval(timer);
   seconds = 0;
   timer = null;    
   clock.innerHTML = getHourOfSeconds(seconds);
   setIdleStyle();
})
