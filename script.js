function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') {
      alert('Please enter a task.');
      return;
  }

  var newTask = document.createElement('li');
  newTask.innerHTML = taskInput.value + '<button onclick="removeTask(this)">Remove</button>';
  taskList.appendChild(newTask);

  taskInput.value = '';
}

function removeTask(button) {
  var taskList = document.getElementById('taskList');
  var listItem = button.parentNode;
  taskList.removeChild(listItem);
}