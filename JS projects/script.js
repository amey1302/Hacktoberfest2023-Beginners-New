function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();
    taskInput.value = "";

    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    var taskList = document.getElementById("taskList");
    var taskItem = document.createElement("li");
    taskItem.innerText = taskText;

    taskItem.onclick = function() {
        if (taskItem.classList.contains("completed")) {
            taskItem.classList.remove("completed");
        } else {
            taskItem.classList.add("completed");
        }
    };

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        taskItem.remove();
    };

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}
