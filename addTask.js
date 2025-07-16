// array to store each "taskObj"
let taskArray = [];

function addTask() {
    // 1. get each input element
    const taskNameInput = document.getElementById("task-name-input");
    const taskTimeInput = document.getElementById("task-time-input");

    // 2. get the value of each input and store in an array as an "obj"
    // Each task - an object with properties like name and time.
    // All tasks - stored inside an array as an obj.
    let taskObj = {};
    taskObj.name = taskNameInput.value;
    taskObj.time = taskTimeInput.value;

    // 3.check whether name or time is empty
    if (taskObj.name === "" || taskObj.time === "") {
        // if empty craete a message to tell user
        // append to add-task-container(already get it from basic.js)
        // also check if message already exists
        if (document.getElementById("warning-text")) { //check truthy or falsy value
            return;
        }
        const message = document.createElement("p");
        message.textContent = "please enter all fields. !";
        message.id = "warning-text";
        addTaskContainer.appendChild(message);
        return;
    } else {
        taskArray.push(taskObj);
    }
    // after push() save taskArray to local
    saveLocal();

    // 4. close add task ui immediately
    closeAddTask();

    // 5. build task (display on screen)
    displayTask(taskObj);
}

function displayTask(taskObj) {
    // get container of all tasks
    const toDoContainer = document.getElementById("todo-container");

    // create a task body
    const taskBody = document.createElement("section");
    taskBody.className = "todo-body";
    
    // create task box and append to task body
    const taskBox = document.createElement("div");
    taskBox.className = "task-box";
    taskBody.appendChild(taskBox);

    // craete paragraph for task name, time
    const taskName = document.createElement("p");
    taskName.className = "task-name";
    const taskTime = document.createElement("p");
    taskTime.className = "time";
    // append to task box
    taskBox.append(taskName, taskTime);

    // craete img element and append to task body
    const taskImg = document.createElement("img");
    taskImg.src = "images/check-icon.png";
    taskImg.width = 64;
    taskImg.height = 64;
    taskImg.alt = "check-icon";
    // add deleteTask() for each img element and use that eventObj to represent each img element 
    taskImg.onclick = function(eventObj) {
        deleteTask(eventObj);
    };
    taskBody.appendChild(taskImg);

    // insert element to task container
    toDoContainer.insertAdjacentElement("beforeend", taskBody);

    // inset text from taskObj
    taskName.textContent = taskObj.name;
    taskTime.textContent = taskObj.time;
}

function clear() {
    // get all input elements, store as NodeList
    const inputEl = document.querySelectorAll("#add-task-container input");
    inputEl.forEach(function(input) {
        input.value = "";
    })
    if (document.getElementById("warning-text")) { //delete warning text, check truthy or falsy value
        document.getElementById("warning-text").remove();
    }
}