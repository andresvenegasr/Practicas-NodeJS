const { getTasks, saveTasks } = require('./manageData');

const updateTask = (id, description, status) => {
    let tasks = getTasks();

    let indexTask = tasks.findIndex(task => task.id === id);

    if (indexTask < 0) return false;

    if (description !== "")
        tasks[indexTask].description = description;

    if (status === 'true' || status === 'false')
        tasks[indexTask].status = (status === 'true') ? true : false;

    saveTasks(tasks);

    return tasks[indexTask];
}

module.exports = {
    updateTask
}