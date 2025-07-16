//for open and close add task ui
const addTaskContainer = document.getElementById("add-task-container");

function openAddTask() {
    addTaskContainer.style = "display :block";
} 

function closeAddTask() {
    addTaskContainer.style = "display: none";
    clear();
}