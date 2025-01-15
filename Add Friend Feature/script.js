let statusEl = document.querySelector(".status");
let btnEl = document.querySelector("button");
let click = 0;

btnEl.addEventListener("click", function () {
    if (click == 0) {
        btnEl.innerText = "Remove";
        statusEl.innerText = "You're now friends."
        statusEl.style.color = "green";
        statusEl.style.fontSize = "15px";
        statusEl.style.fontWeight = "500";
        click = 1;
    }else{
        btnEl.innerText = "Add Friend";
        statusEl.innerText = "Strange";
        statusEl.style.color = "red";
        statusEl.style.fontSize = "18px"
        click = 0;
    }

})