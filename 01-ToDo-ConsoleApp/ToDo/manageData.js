const fs = require('fs');
const url_task_file = 'Tasks/data.json';

const saveTask = (task) => {
    let data = getTasks();

    task.id = data.length + 1;

    data.push(task);

    saveTasks(data);
}

const saveTasks = (tasks) => {
    fs.writeFile(url_task_file, JSON.stringify(tasks), (err) => {
        if (err) throw new Error('An error has occurred.', err);
    });
}

const getTasks = () => require(`../${url_task_file}`);

module.exports = {
    saveTask,
    saveTasks,
    getTasks
}