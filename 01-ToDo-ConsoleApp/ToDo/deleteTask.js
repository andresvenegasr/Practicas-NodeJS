const { getTasks, saveTasks } = require('./manageData');

const deleteTask = (id) => {
    let tasks = getTasks();

    let task = tasks.find(task => task.id === id);

    tasks = tasks.filter(task => task.id !== id);
    saveTasks(tasks);

    return task;
}

module.exports = {
    deleteTask
}