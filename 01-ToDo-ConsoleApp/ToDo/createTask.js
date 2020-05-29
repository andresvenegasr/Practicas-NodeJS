const { saveTask } = require('./manageData');

const createTask = (description) => {
    let task = {
        description,
        status: false
    };

    saveTask(task);

    return task;
}

module.exports = { createTask };