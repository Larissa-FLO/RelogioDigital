
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let now = new Date();
    let hora = now.getHours();
    let minuto = now.getMinutes();
    let segundo = now.getSeconds();

    horas.textContent = `${hora} : `;
    minutos.textContent = `${minuto} : `;
    segundos.textContent = `${segundo}`;

    if (hora < 10){
        horas.textContent = `0${hora} :`;
    }

    if (minuto < 10){
        minutos.textContent = `0${minuto} :`;
    }

    if (segundo < 10){
        segundos.textContent = `0${segundo}`;
    }

})