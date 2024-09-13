const bodyEl = document.querySelector("body");

const careers = ["Youtuber", "Web Developer", "Freelancer", "Student"];
let careerIndex = 0;
let characterIndex = 0;

function update() {
  // Get the current career and slice it up to the current character index
  const currentCareer = careers[careerIndex];
  bodyEl.innerHTML = `<h1>I am a ${currentCareer.slice(0, characterIndex)} </h1>`;
  
  // Increase characterIndex to type the next letter
  characterIndex++;
  
  // Check if the entire word has been typed
  if (characterIndex > currentCareer.length) {
    // Move to the next career
    careerIndex++;
    characterIndex = 0;
    
    // If we reach the end of the careers array, loop back to the start
    if (careerIndex === careers.length) {
      careerIndex = 0;
    }
  }
  
  setTimeout(update, 400);
}

update();
