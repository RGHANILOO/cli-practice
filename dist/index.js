#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
//  declare the program 
const program = new commander_1.Command();
// add actions to the program 
program
    .action(() => {
    console.log('Hello World!!');
})
    .description('A simple hello world program');
//  this program capitalises the string on -c
program
    .argument("<string>", "string to log")
    .option("-c, capitalise", "Capitalise the message")
    .action((message, opts) => {
    if (opts.capitalise) {
        console.log(message.toUpperCase());
    }
    else {
        console.log(message);
    }
}
// execute cli witht he given arguments
)
    .description('Say Hello');
program
    .command("add <numbers>")
    .action((numbers) => {
    const total = numbers.reduce((a, b) => a + b, 0);
    console.log(`Total: ${total}`);
})
    .description("Add numbers and log the total");
program.parse(process.argv);
