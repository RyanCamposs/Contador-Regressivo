var intervalId;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;

    intervalId = setInterval(function(){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;


        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }


    }, 1000);
}


window.onload = function () {
   
    var duration = 60 * 5; // para segundos
    var display = document.querySelector('#timer'); // exibir o timer

    startTimer(duration, display);
}

function reiniciar() {
    clearInterval(intervalId)
    let valor = Number(document.querySelector('#inputSegundos').value)
    duration = 60 * valor; // para segundos

    if (duration === 0) {
        duration = 60 * 5
    }
    
    var display = document.querySelector('#timer'); // exibir o timer
    startTimer(duration, display);
}

function adicionar() {
    clearInterval(intervalId);
    let valor = Number(document.querySelector('#inputSegundos').value)
    duration = 60 * valor;
    var display = document.querySelector('#timer');
    startTimer(duration, display);
}

function changeMode() {
    let background = document.body
    let items = document.querySelector('.global')
    let botao = document.getElementById('botaoChange')
    let timerColor = document.getElementById('timer')


    items.classList.toggle('darkBorder')
    background.classList.toggle('dark')
    botao.classList.toggle('light')
    timerColor.classList.toggle('timerBlack')

    
    
}