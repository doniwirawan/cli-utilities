import Conf from 'conf'
import chalk from 'chalk'

function addNumber({ numbers }) {
    const numberArray = numbers.map(Number)

    let result = numberArray.reduce((a, b) => a + b, 0)

    console.log(chalk.green.bold(`The result of ${numberArray.join(',').replace(/,/g, '+').split()}=${result}`))
}

export default addNumber