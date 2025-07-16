function saveLocal() {
    localStorage.setItem("tasks", JSON.stringify(taskArray));

    if (taskArray.length === 0) {
        localStorage.clear();
    }
}

// get local when the page is refresh and display it on screen.
getLocal();

function getLocal() {

    // assign local storage to taskArray when refresh
    if (JSON.parse(localStorage.getItem("tasks"))) {
        taskArray = JSON.parse(localStorage.getItem("tasks"));

        taskArray.forEach(function(task) {
            displayTask(task);
        })
    } else { // if local storage is null return ad let taskArray = []
        return;
    }
}