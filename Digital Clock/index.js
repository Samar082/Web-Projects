const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const ampmEl = document.querySelector(".ampm");

const alarmEl = document.querySelector("#alarm");
const clockEl = document.querySelector("#clock");
const stopwatchEl = document.querySelector("#stopwatch");
const timerEl = document.querySelector("#timer");

updateClock(); // call the function to update the time

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "";

    if (h > 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }
    
    if(h >= 6 && h <= 18){
        ampmEl.style.color = "yellow";
        ampmEl.style.backgroundColor = "gray";
    }

    s = s < 10 ? "0" + s : s;
    m = m < 10 ? "0" + m : m;
    h = h < 10 ? "0" + h : h;
   
    hoursEl.innerText = h + " :";
    minutesEl.innerText = m + " :";
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000);
}

menuClick();
function menuClick(){

}






