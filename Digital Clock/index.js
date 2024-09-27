// let time = new Date(); // to get the real time

// console.log(time.toTimeString());
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());

const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const buttonEl = document.querySelector("button");

updateClock(); // call the function to update the time

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "";

    if(h > 12){
       ampm = "PM";
    } else{
        ampm = "AM";
    }

    s = s < 10 ? "0" + s: s;
    m = m < 10 ? "0" + m: m;
    h = h < 10 ? "0" + h: h;

    if (h >= 6 && h <= 18) {
        body.style.backgroundimage = URL("");
    }

    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    buttonEl.innerText = ampm;
    setTimeout(()=>{
        updateClock();
    }, 1000);
}







