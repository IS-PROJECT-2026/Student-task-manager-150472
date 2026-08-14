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

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        task.remove();
    });

    task.appendChild(deleteButton);
    taskList.appendChild(task);

    taskInput.value = "";
});