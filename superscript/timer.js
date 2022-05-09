
let time = 80;

let counter = time*60;

let timer = document.getElementById('time');

setInterval(timecount , 1000)

function timecount()
{
    let hour = Math.floor(time/60);

    const min = time%60;

    let sec = counter%60;

    timer.innerHTML = `0${hour} : ${min} : ${sec}`;
    
    counter--;
    
}

const Time = 1439;

let timeSec = 1440*60;

let settimer = document.getElementById('startTime');

function settiming()
{
    let hour = Math.floor(Time/60);

    let min = Time%60;

    let sec = timeSec%60;

    settimer.innerHTML = `${hour} : ${min} : ${sec}`;

    timeSec--;

};

setInterval(settiming , 1000)