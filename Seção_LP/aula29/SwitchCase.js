function getDayWeekText(diaSemana){
    let diaSemanaTexto;
    switch (diaSemana){
    case 0:
        console.log('Domingo');
        return diaSemanaTexto;
    case 1:
        console.log('Segunda');
        return diaSemanaTexto;
    case 2: 
        console.log('Terça');
        return diaSemanaTexto;
    case 3:
        console.log('Quarta');
        return diaSemanaTexto;
    case 4: 
        console.log('Quinta');
        return diaSemanaTexto;
    case 5: 
        console.log('Sexta');
        return diaSemanaTexto;
    case 6:
        console.log('Sábado');
        return diaSemanaTexto;
    default:
        console.log('Dia inválido')
        return diaSemanaTexto;
}
}

const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDayWeekText(diaSemana);


console.log(diaSemana, diaSemanaTexto); 