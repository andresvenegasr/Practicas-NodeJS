const argv = require('./config/yargs').argv;
const { createTask } = require('./ToDo/createTask');
const { listAllTasks, listCompletedTasks, listTodoTasks } = require('./ToDo/listTasks');
const { updateTask } = require('./ToDo/updateTask');
const { deleteTask } = require('./ToDo/deleteTask');

let command = argv._[0].toLowerCase();

switch (command) {
    case 'create':
        let newTask = createTask(argv.description);
        console.log(newTask);
        break;
    case 'list':
        switch (argv.type) {
            case 'all':
                listAllTasks();
                break;
            case 'completed':
                listCompletedTasks();
                break;
            case 'todo':
                listTodoTasks();
                break;
            default:
                throw new Error('Invalid argumment');
                break;
        }
        break;
    case 'update':
        let updatedTask = updateTask(argv.id, argv.description, argv.complete);
        console.log(updatedTask);
        break;
    case 'delete':
        let deletedTask = deleteTask(argv.id);
        console.log(`The task: ${deletedTask.description} has been deleted.`);
        break;
    default:
        throw "Invalid command";
        break;
}