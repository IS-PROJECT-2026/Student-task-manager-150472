const taskInput = document.querySelector("input");
const addButton = document.querySelector("button");
const taskList = document.querySelector("ul");

addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const task = document.createElement("li");
    task.textContent = taskText;

    taskList.appendChild(task);

    taskInput.value = "";
});