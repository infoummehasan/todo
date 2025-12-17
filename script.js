// 1. Select the elements
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 2. Function to add a task
function addTask() {
    const taskText = input.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create the <li> element
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <span class="delete-btn">X</span>
    `;

    // Toggle completed state on click
    li.addEventListener('click', (e) => {
        if (e.target.classList.contains('task-text')) {
            e.target.classList.toggle('completed');
        }
    });

    // Delete task on "X" click
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });

    // Add the <li> to our <ul>
    todoList.appendChild(li);

    // Clear the input field
    input.value = "";
}

// 3. Link the function to the button
addBtn.addEventListener('click', addTask);

// Allow "Enter" key to add task too
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});