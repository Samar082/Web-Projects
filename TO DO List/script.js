let button = document.getElementById("add-button");
let input = document.getElementById("input");
let taskList = document.getElementById("task-list");

function addTask() {
    let task = input.value.trim();
    
    // Check if the input is empty
    if (task === "") {
        alert("Enter a task!");
    } else {
        // Create a list item 
        let list = document.createElement('li');
        
        // Create the Font Awesome circle icon
        let circleIcon = document.createElement('i');
        circleIcon.className = "fa-regular fa-circle";
        
        // Append the icon to the list item
        list.appendChild(circleIcon);
        
        // Add a space and then the task text
        list.appendChild(document.createTextNode(' ' + task));
        
        // Append the list item to the task list
        taskList.appendChild(list);
        
        // Clear the input box
        input.value = "";
    }
}

// Add task when the button is clicked
button.addEventListener('click', addTask);

// Add task when the "Enter" key is pressed
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
