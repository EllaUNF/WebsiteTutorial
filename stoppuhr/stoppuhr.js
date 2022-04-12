const anzeige = document.getElementById("Time");

var stoppedTime =0;
var stopped = true;
var lastRun = new Date();

function start() {
    pausiert = false;
}

function pause() {
    pausiert = true;
}

function reset() {
    pausiert = true;
    stoppedTime = 0;
    updateDisplay();
}

function updateTime() {
    if(pausiert === false) {
        stoppedTime += new Date() - lastRun;
        updateDisplay();
    }
    
    lastRun = new Date();
    setTimeout(updateTime, 1)
}

function updateDisplay() {
    anzeige.innerHTML = stoppedTime;
}

updateTime();