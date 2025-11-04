let tasks = [
    {
        id: 1,
        name: 'Homework',
        isComplete: false
    }
]

const input = document.getElementById('newTask')
input.addEventListener("change", addTask);

const container = document.querySelector('.main__list');

const completedRadio = document.getElementById('completed');
const uncompletedRadio = document.getElementById('uncompleted');
const allRadio = document.getElementById('all');

completedRadio.addEventListener('change', showComplete);
uncompletedRadio.addEventListener('change', showActive);
allRadio.addEventListener('change', showAll);

function addTask (v) {
    const newtask = {
        id: Date.now(),
        name: v.target.value.trim(),
        isComplete: false,
    }
    tasks = [...tasks, newtask];
    renderTasks();
    input.value = '';
}

function deleteTask (taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    applyCurrentFilter();
}

function showActive () {
    const activeTasks = tasks.filter(task => !task.isComplete);
    renderTasks(activeTasks);
}

function showComplete() {
    const completedTasks = tasks.filter(task => task.isComplete);
    renderTasks(completedTasks);
}

function showAll() {
    renderTasks();
}
function toggleComplete(taskID) {
    tasks = tasks.map(task => task.id == taskID ? {...task, isComplete : !task.isComplete } : task)
    renderTasks();
    applyCurrentFilter();
}
function applyCurrentFilter() {
    if (completedRadio.checked) {
        showComplete();
    } else if (uncompletedRadio.checked) {
        showActive();
    } else {
        showAll();
    }
}
function renderTasks(tasksToRender = tasks) {
    container.innerHTML = '';

    tasksToRender.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'main__list__task';
        taskElement.setAttribute('data-id', task.id);

        taskElement.innerHTML = `
            <p class="${task.isComplete ? 'completed' : ''}">${task.name}</p>
            <div>
                <button class="delete-btn">delete task</button>
                <input type="checkbox" ${task.isComplete ? 'checked' : ''}>
            </div>
        `;

        const deleteBtn = taskElement.querySelector('.delete-btn');
        const checkbox = taskElement.querySelector('input[type="checkbox"]');

        deleteBtn.addEventListener('click', () => deleteTask(task.id));
        checkbox.addEventListener('change', () => toggleComplete(task.id));

        container.appendChild(taskElement);
    });
    console.log(tasks);

}

renderTasks();
