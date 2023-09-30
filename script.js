const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to render tasks from local storage
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${task.text}</span>
            <button onclick="removeTask(${index})">Remove</button>
        `;
    taskList.appendChild(li);
  });
}

// Function to add a task to local storage
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const newTask = { text: taskText };
  
  
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  renderTasks();
}

// Function to remove a task from local storage
function removeTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks();
}

// Initial rendering of tasks
renderTasks();


















