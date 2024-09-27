document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to render tasks to the UI
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${task}</span>
                <div>
                    <button class="edit-btn" onclick="editTask(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    }

    // Function to add a new task
    function addTask() {
        const task = taskInput.value.trim();
        if (task !== '') {
            tasks.push(task);
            taskInput.value = '';
            updateLocalStorage();
            renderTasks();
        }
    }

    // Function to edit a task
    window.editTask = function (index) {
        const newTask = prompt('Edit the task:', tasks[index]);
        if (newTask !== null && newTask.trim() !== '') {
            tasks[index] = newTask.trim();
            updateLocalStorage();
            renderTasks();
        }
    };

    // Function to delete a task
    window.deleteTask = function (index) {
        tasks.splice(index, 1);
        updateLocalStorage();
        renderTasks();
    };

    // Update localStorage after any changes
    function updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add task button listener
    addTaskBtn.addEventListener('click', addTask);

    // Render tasks on page load
    renderTasks();
});
