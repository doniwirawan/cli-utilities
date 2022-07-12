import Conf from 'conf'
import chalk from 'chalk'
const conf = new Conf();

function list() {
    const todoList = conf.get('todo-list')

    if (todoList && todoList.length) {
        //user has tasks in todoList
        console.log(
            chalk.blue.bold('Tasks in green are done. Tasks in yellow are still not done.')
        )

        todoList.forEach((task, index) => {
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

    } else {
        //user does not have tasks in todoList
        console.log(
            chalk.red.bold('You don\'t have any tasks yet.')
        )
    }
}
export default list
