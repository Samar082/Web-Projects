const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
const circleEl = document.querySelector(".circle");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.backgroundColor = "black";
    } else{
        bodyEl.style.backgroundColor = "white";

    }
}

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
inputEl.addEventListener("input", () => {
   updateBody();
   updateLocalStorage();
})
