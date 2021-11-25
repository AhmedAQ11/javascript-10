

var minPara = document.getElementById("min");

var secPara = document.getElementById("sec");

var msecPara = document.getElementById("msec");

var hourPara = document.getElementById("hour")

var hour = 00;

var min = 00;

var sec = 00;

var msec = 00;


var interval;

function timer(){
    msec++
    msecPara.innerHTML = msec
    if(msec == 100){
        sec++
        secPara.innerHTML = sec
        msec = 00
    }else if(sec == 60){
        min++
        minPara.innerHTML = min
        sec = 00
    }else if(min == 60){
        hour++
        hourPara.innerHTML = hour
        min = 00
    }
}


function start(){

    var startBtn = document.getElementById("startBtn")

    interval = setInterval (timer , 10)

    startBtn.disabled = true
}

function stop(){
    var startBtn = document.getElementById("startBtn")

    clearInterval(interval)

    startBtn.disabled = false
}

function reset(){
    clearInterval(interval);
    msecPara.innerHTML = 00;
    secPara.innerHTML = 00;
    minPara.innerHTML = 00;
    hourPara.innerHTML = 00;

    hour = 00;
    min = 00;
    sec = 00;
    msec = 00;
}