const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const empty = document.getElementById('empty-list');

// Add task function
const addTask = (e) => {
  e.preventDefault();
// Remove "empty" message when TASK is created
  empty.classList.add('remove');


// Create the li element which will be the actual task
  const task = document.createElement('li');
  task.innerText = input.value;
  task.classList.add('task');
  // Append the  taskList / task to the DOM
  taskList.appendChild(task);
// Create the complete / delete buttons
  
//Clear the input field after the TASK has been created
  input.value = '';  
}

// Event Listeners
addBtn.addEventListener('click', addTask);
// addBtn.addEventListener('keydown',function(e){
//   if (13 == e.key) {
//   console.log("enter enter");
// }  
// });