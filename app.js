const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');


// Add task function
const addTask = (e) => {
  e.preventDefault;

// Create the li element which will be the actual task
  const task = document.createElement('li');
  task.innerText = input.value;
  task.classList.add('task');
  taskList.appendChild(task);
// Create the complete / delete buttons
  
// Append the  taskList / task to the DOM
  
}



// Event Listeners
addBtn.addEventListener('click', addTask);
addBtn.addEventListener('keydown',function(e){
  if (13 == e.key) {
  console.log("enter enter");
}  
});