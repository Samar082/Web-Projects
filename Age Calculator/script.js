const dateInput = document.getElementById("dateInput");
const btn = document.getElementById("btn");
const msg = document.getElementById("msg");
// Get present date
let todayDate = new Date();
// console.log(todayDate);
let d1 = todayDate.getDate(); // it returns day
let m1 = todayDate.getMonth() + 1; // it returns month
let y1 = todayDate.getFullYear(); // it returns year
//console.log(d1, m1, y1);

// Track when the user selects a date
dateInput.addEventListener('input', function() {
    const selectedDate = new Date(this.value);
    // console.log("User selected date: " + selectedDate);
   
    let d2 = selectedDate.getDate();
    let m2 = selectedDate.getMonth() + 1;
    let y2 = selectedDate.getFullYear();
    // console.log(d2, m2, y2);
    btn.addEventListener("click", calculateAge(d2, m2, y2));
    // You can now use the selectedDate for further processing
    // For example, displaying it on the page, sending it to a server, etc.
});

// Set the max attribute to today's date
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('max', today);

// function to calculate the age
const calculateAge = (d2, m2, y2) =>{
    y3 = y1 - y2 // difference between the year
    if(m1 > m2){
        m3 = m1 - m2;
    } else{
        m3 = 12 + m1 - m2;
        y3--;
    }

    if(d1 > d2){
        d3 = d1 - d2;
    } else{
        d3 = 30 + d1 - d2;
        m3--;
    }
    if(m3<0){
        m3 = 11;
        y3--;
    }
    msg.innerHTML = `You are  <span>${y3}</span/> years <span>${m3}</span> months <span>${d3}</span> days old`;
    

}

// Open the calendar when the user clicks on the input field
dateInput.addEventListener('click', function() {
    this.showPicker(); // Open the date picker programmatically
});

