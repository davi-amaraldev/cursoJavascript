const dateHourText = document.querySelector('#dateHour');
const date = new Date();

 const getDayWeek = () => {
   let day = date.getDay();
   switch (day) {
     case 0:
       return "Domingo";
     case 1:
       return "Segunda-Feira";
     case 2:
       return "Terça-Feira";
     case 3:
       return "Quarta-Feira";
     case 4:
       return "Quinta-Feira";
     case 5:
       return "Sexta-Feira";
     case 6:
       return "Sábado";
   }
};

const monthFunc = () => {
  let month = date.getMonth();
  switch (month) {
    case 0:
      return "Janeiro";
    case 1:
      return "Fevereiro";
    case 2:
      return "Março";
    case 3:
      return "Abril";
    case 4:
      return "Maio";
    case 5:
      return "Junho";
    case 6:
      return "Julho";
    case 7:
      return "Agosto";
    case 8:
      return "Setembro";
    case 9:
      return "Outubro";
    case 10:
      return "Novembro";
    case 11:
      return "Dezembro";
    default:
      return "Mês Inválido";
  }
};

function getDate(){
   
    const dayWeek = getDayWeek();
    const day = date.getDate();
    const month = monthFunc();
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();

    return `${dayWeek}, ${day} de ${month} de ${year} | \n${hour}:${min}`;
}

function setDate(msg){
    msg = getDate();

    dateHourText.innerHTML = msg;
}

getDate();
setDate();