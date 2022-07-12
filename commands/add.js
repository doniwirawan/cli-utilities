import Conf from 'conf'
import chalk from 'chalk'
const conf = new Conf();

function add(task) {
    //get the current todo-list
    let todosList = conf.get('todo-list')

    if (!todosList) {
        //default value for todos-list
        todosList = []
    }

    //push the new task to the todos-list
    todosList.push({
        text: task,
        done: false
    })

    //set todos-list in conf
    conf.set('todo-list', todosList)

    //display message to user
    console.log(
        chalk.green.bold('Task has been added successfully!')
    )
    console.log(
        chalk.blue.bold('Tasks in green are done. Tasks in yellow are still not done.')
    )

    // showing all the todo-list
    todosList.forEach((task, index) => {
        if (task.done) {
            console.log(
                chalk.greenBright(`${index}. ${task.text}`)
            )
        } else {
            console.log(
                chalk.yellowBright(`${index}. ${task.text}`)
            )
        }
    })

    // return task
}
export default add
// module.exports = add;

