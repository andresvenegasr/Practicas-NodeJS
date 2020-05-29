const argv = require('yargs')
    .command('create', 'Create task.', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Task description'
        }
    })
    .command('list', 'List tasks', {
        type: {
            default: "all",
            alias: 't',
            desc: 'List tasks [all,completed,todo]'
        }
    })
    .command('update', 'Update task status.', {
        id: {
            demand: true,
            alias: 'i',
            desc: 'Task ID'
        },
        description: {
            default: '',
            alias: 'd',
            desc: 'Task description'
        },
        complete: {
            default: false,
            alias: 'c',
            desc: 'Assign task status.'
        }
    })
    .command('delete', 'Delete task', {
        id: {
            demand: true,
            alias: 'i',
            desc: 'Task ID'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}