const month = document.querySelector(".month");
const day = document.querySelector(".day");
const number = document.querySelector(".number");
const year = document.querySelector(".year");

const  d = new Date();
const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

month.innerText = months[d.getMonth()];
day.innerText = days[d.getDay()];
number.innerText = d.getDate();
year.innerText = d.getFullYear();




