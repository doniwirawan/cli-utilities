#! /usr/bin/env node
import { program } from 'commander'
import add from './commands/add.js'
import list from './commands/list.js'
import markDone from './commands/markDone.js'
import addNumber from './commands/addNumber.js'

program
    .command('todo-list')
    .description('List all the TODO tasks')
    .action(list)

program
    .command('todo-add <task>')
    .description('Add a new TODO task')
    .action(add)

program
    .command('todo-mark-done')
    .description('Mark commands done')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action(markDone)

program
    .command('add')
    .description('Add Numbers')
    .option('-n, --numbers <numbers...>', 'Add the numbers')
    .action(addNumber)


program.parse()

