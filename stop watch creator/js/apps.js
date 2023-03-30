let timerdisplay = document.querySelector('.timerdisplay');
let stopbutton = document.getElementById('stopBtn');
let startbutton = document.getElementById('startBtn');
let resetbutton = document.getElementById('resetBtn');


let msec = 00;
let secs = 00;
let mins = 00;


startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
})


stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
})

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerdisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 00;
})

let timerId = null;

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs== 60){
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minString = mins < 10 ? `0${mins}` : mins;

 

    timerdisplay.innerHTML = `${minString} : ${secsString} : ${msecString}`;
}