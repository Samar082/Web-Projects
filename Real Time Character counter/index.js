const textareaEl = document.getElementById("textarea");
const totalEl = document.querySelector(".total");
const remainingEl = document.querySelector(".remaining");

updateCounter();
textareaEl.addEventListener("keyup", () => {
     updateCounter();
})

function updateCounter(){
     totalEl.innerText = textareaEl.value.length;
     remainingEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
