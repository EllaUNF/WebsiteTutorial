const anzeige = document.getElementById("Time");

var stoppedTime = 0;
var stopped = true;
var lastRun = new Date();

function start() {
    stopped = false;
}

function pause() {
    stopped = true;
}

function reset() {
    stopped = true;
    stoppedTime = 0;
    updateDisplay();
}

function updateTime() {
    if(stopped === false) {
        stoppedTime += new Date() - lastRun;
        updateDisplay();
    }
    
    lastRun = new Date();
    setTimeout(updateTime, 1)
}

function updateDisplay() {
    let milliseconds = stoppedTime % 1000;
    let seconds = Math.floor(stoppedTime / 1000) % 60;
    let minute = M
}

updateTime();