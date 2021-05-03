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
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task-div');
  taskList.appendChild(taskDiv);
  const task = document.createElement('li');
  task.innerText = input.value;
  task.classList.add('task');
  taskDiv.appendChild(task);
  // Append the  taskList / task to the DOM
// Create the complete / delete buttons
  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = `<i class="far fa-check-square"></i>`;
  completeBtn.classList.add('complete-btn');
  taskDiv.appendChild(completeBtn);
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;
  deleteBtn.classList.add('delete-btn');
  taskDiv.appendChild(deleteBtn);
//Clear the input field after the TASK has been created
  input.value = '';  

}

const completeTask = (e) => {
  let item = e.target;
 if(item.classList[0] === 'complete-btn') {
   let task = item.previousSibling;
   task.classList.add('task-complete');
   console.log('hello');
 }
}


// Event Listeners
addBtn.addEventListener('click', addTask);
taskList.addEventListener('click', completeTask);
