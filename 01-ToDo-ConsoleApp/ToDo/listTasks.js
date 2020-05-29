const { getTasks } = require('./manageData');

const listAllTasks = () => {
    let tasks = getTasks();

    for (let i = 0; i < tasks.length; i++) {
        console.log(`[${tasks[i].id}] -> ${tasks[i].description} [estatus: ${(!tasks[i].status) ? "To do" : "Completed"}]`);
    }
};

const listCompletedTasks = () => {
    let tasks = getTasks();

    tasks = tasks.filter(task => task.status === true);

    if (!tasks) {
        console.log("No tasks completed.");
        return;
    }

    for (let i = 0; i < tasks.length; i++) {
        console.log(`[${tasks[i].id}] -> ${tasks[i].description}`);
    }
};

const listTodoTasks = () => {
    let tasks = getTasks();

    tasks = tasks.filter(task => task.status === false);

    if (!tasks) {
        console.log("No tasks to do.");
        return;
    }

    for (let i = 0; i < tasks.length; i++) {
        console.log(`[${tasks[i].id}] -> ${tasks[i].description}`);
    }
};

module.exports = {
    listAllTasks,
    listCompletedTasks,
    listTodoTasks
}