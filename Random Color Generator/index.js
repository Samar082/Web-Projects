const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors() {
    colorContainerEls.forEach((colorContainerEl) => {
      const newColorCode = randomColor();
      colorContainerEl.style.backgroundColor = "#" + newColorCode;
      colorContainerEl.innerText = "#" + newColorCode;
    });
  }
  
function randomColor(){
    let str = "0123456789abcdef";
    let colorCode = "";

    for (let index = 0; index < 6; index++) {
        colorCode = colorCode + str.charAt(Math.floor(Math.random()*str.length));
    }
    return colorCode;
    
}