let input = document.getElementById("input");
let button = document.getElementById("button");
const result = document.getElementById("result"); 

function checkPalindrome(){
 //Get the value fromm the user
 let content = input.value;

 //remove all non-alphanumeric characters from the input and convert it into lowercase
 let cleanedString  = content.replace(/[^0-9a-z]/gi, '').toLowerCase();

 //reverse the string 
 reversedString = cleanedString.split('').reverse().join('');
 
 //check string is palindrome or not
 if(content == ""){
     result.textContent = "Enter a number or string";
  }
 else if(reversedString === content){
   //show the message
   result.innerHTML = `Yes! <span class="yes">${content}</span> is a Palindrome`;
   
 }
 else{
     result.innerHTML = `<span class="no">${content}</span> is not a Palindrome!`;
     
 }
}

button.addEventListener('click', function(){
   checkPalindrome();
});

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkPalindrome();
    }
});