#! /usr/bin/env node

// const { program } = require('commander')
import { program } from 'commander'
import add from './commands/add.js'
import list from './commands/list.js'
import markDone from './commands/markDone.js'
// const list = require('./commands/list')
// const add = require('./commands/add')
// const markDone = require('./commands/markDone')

program
    .command('list')
    .description('List all the TODO tasks')
    .action(list)

program
    .command('add <task>')
    .description('Add a new TODO task')
    .action(add)

program
    .command('mark-done')
    .description('Mark commands done')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action(markDone)


program.parse()

