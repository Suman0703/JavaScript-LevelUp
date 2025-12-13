let tasks = [];
let currentFilter = "all";

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const pendingCount = document.getElementById("pendingCount");

const filterButtons = document.querySelectorAll(".filter-btn");

addTaskBtn.addEventListener("click", () => {
    addTask(taskInput.value);
});

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        setFilter(btn.dataset.filter);
    });
});

function addTask(taskText) {
    if (taskText.trim() === "") return;

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    taskInput.value = "";

    saveTasks();
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = "";

    const filteredTasks = getFilteredTasks();

    filteredTasks.forEach(task => {
        const li = document.createElement("li");
        li.className = `task-item ${task.completed ? "completed" : ""}`;

        const span = document.createElement("span");
        span.className = "task-text";
        span.textContent = task.text;
        span.onclick = () => toggleTask(task.id);

        const actions = document.createElement("div");
        actions.className = "task-actions";

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = () => deleteTask(task.id);

        actions.appendChild(delBtn);
        li.appendChild(span);
        li.appendChild(actions);
        taskList.appendChild(li);
    });

    updateCounters();
}

function toggleTask(taskId) {
    tasks = tasks.map(task =>
        task.id === taskId
            ? { ...task, completed: !task.completed }
            : task
    );

    saveTasks();
    renderTasks();
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);

    saveTasks();
    renderTasks();
}

function setFilter(filter) {
    currentFilter = filter;

    filterButtons.forEach(btn =>
        btn.classList.toggle("active", btn.dataset.filter === filter)
    );

    renderTasks();
}

function getFilteredTasks() {
    if (currentFilter === "completed") {
        return tasks.filter(task => task.completed);
    }
    if (currentFilter === "pending") {
        return tasks.filter(task => !task.completed);
    }
    return tasks;
}

function updateCounters() {
    totalCount.textContent = tasks.length;
    completedCount.textContent = tasks.filter(t => t.completed).length;
    pendingCount.textContent = tasks.filter(t => !t.completed).length;
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const stored = localStorage.getItem("tasks");
    if (stored) {
        tasks = JSON.parse(stored);
    }
}

loadTasks();
renderTasks();
