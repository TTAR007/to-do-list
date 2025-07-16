function deleteTask(eventObj) {
    // 1. get the parent of that img
    // don't have to check because eventObj is already img element if we use .target
    const parentEl = eventObj.target.parentNode;

    // 2. remove it in taskArray also
    for (let i = 0; i < taskArray.length; i++) {
        const taskBox = parentEl.firstElementChild;
        const taskName = taskBox.firstElementChild;
        const taskTime = taskName.nextElementSibling;

        if (taskArray[i].name === taskName.textContent && taskArray[i].time === taskTime.textContent) {
            const removeIndex = i;
            taskArray.splice(removeIndex, 1); //delete at index(removeIndex) and delete count = 1
            break;
        }
    }

    // save taskArray to local storage after delete
    saveLocal();
    
    // 3. delete that parent from screen.
    parentEl.remove();
}