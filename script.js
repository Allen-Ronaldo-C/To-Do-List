// Function to render tasks
function renderTasks() {
    let taskList = document.getElementById('task-list');
    let loading = document.getElementById('loading');
    let noTasksMessage = document.getElementById('no-tasks-message');
    
    // Display loader and hide task list initially
    loading.style.display = 'block';
    taskList.style.display = 'none';
    noTasksMessage.style.display = 'none';
  
    // Load tasks from local storage
    loadTasks();
  
    // Simulate loading time with setTimeout
    setTimeout(() => {
      taskList.innerHTML = '';
      if (tasks.length === 0) {
        noTasksMessage.style.display = 'block';
      } else {
        tasks.forEach((task, index) => {
          let taskElement = document.createElement('li');
          taskElement.textContent = task.text;
          taskElement.classList.add('animated', 'fadeIn');
          if (task.done) {
            taskElement.classList.add('done');
          }
          taskElement.addEventListener('click', () => {
            removeTask(index);
          });
          taskList.appendChild(taskElement);
        });
      }
  
      // Hide loader and display task list after tasks are rendered
      loading.style.display = 'none';
      taskList.style.display = 'block';
    }, 1000); // Adjust the time as needed
  }